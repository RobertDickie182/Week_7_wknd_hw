import React from "react";


function favouriteCharacters({characters}){
    const ListItems = characters.map(character => {
        return (
            <li key={character.id}>{character.name}</li>
        );
        
    });

    return (
        <>
        <div className="favourites">
        <h2>Favourite Characters</h2>
        {!characters.length ? <p>You haven't added any characters yet!</p> : null}
        <ul>
            {ListItems}
        </ul>
        </div>
        
        </>
    )

}




export default favouriteCharacters;