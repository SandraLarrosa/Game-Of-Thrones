import React from 'react';
import Character from './Character';
import '../stylesheets/showList.scss';


const CharacterList = props => {
    const cards = props.characters.map((character) => {
        return <li key={character.id}><Character id={character.id} name={character.fullName} img={character.imageUrl} title={character.title} family={character.family}/></li>
    })
    return (
        <ul className='content__card'>
            {cards}
        </ul>
    );
};



export default CharacterList; 