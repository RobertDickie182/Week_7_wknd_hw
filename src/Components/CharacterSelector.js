import React from "react";

const CharacterSelector = ({characters, onCharacterSelected}) => {
    
    const options = characters.map((character, index) => {
        
        return <option value={index} key={character.id}>{character.name}</option>
    }) 

    const onCharacterChange = function(event){
        
        const index = (event.target.value);
        const selectedCharacter = characters[index];
        onCharacterSelected(selectedCharacter);
    }


  return (
    <div>
        <h3>Choose a character...</h3>
        <select onChange={onCharacterChange}>
         {options}
        </select>
    </div>
  );
  

}

export default CharacterSelector;