import React, { useEffect, useState } from "react";
import CharacterSelector from "../Components/CharacterSelector";
import CharacterInfo from "../Components/CharacterInfo";
import FavouriteCharacters from "../Components/FavouriteCharacters";

const CharacterContainer = () => {
    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedcharacter] = useState(null)
    const [favouriteCharacters, setFavouriteCharacters] = useState([])

    useEffect (() => {
        getCharacters();
    }, [])

    const getCharacters = async function (){
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const responsedata = await response.json();
        setCharacters(responsedata.results)
    }

    const onCharacterSelected = function(character){
        setSelectedcharacter(character)
    }

    function addFavouriteCharacter(newFavouriteCharacter){
        const updatedFavouriteCharacters = [...favouriteCharacters, newFavouriteCharacter]
        setFavouriteCharacters(updatedFavouriteCharacters)
    }
    
    
    
    return (
        <div className="main-container">
            <h2>The definitive stop for all Rick and Morty character info!</h2>
            <CharacterSelector characters={characters} onCharacterSelected={onCharacterSelected}/>
            <CharacterInfo character={selectedCharacter} onFavouriteButtonClick={addFavouriteCharacter}/>
            <FavouriteCharacters characters={favouriteCharacters}/>
        </div>

    );
}




export default CharacterContainer;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
