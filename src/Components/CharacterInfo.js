import React from "react";

const CharacterInfo = ({ character, onFavouriteButtonClick}) => {
     
    if (character === null) {
        return <p>Please select a character...</p>
    }


    function handleFavouriteButtonClick(event) {
        onFavouriteButtonClick(character);
    }


    return (
        
        <>
        <div className="character-detail"></div>
        <h2>Name: {character.name}</h2>
        <br></br>
        <img src={character.image}></img>
        <br></br>
        <p> Species: {character.species}</p>
        <p> Status: {character.status}</p>
        <p> Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>
        <br></br>
        <button onClick={handleFavouriteButtonClick}>Add to Favourites</button>
        </>
    )
}

export default CharacterInfo;