import React from 'react';
import Character from './Character';
import '../stylesheets/showList.scss';


const CharacterList = props => {
    console.log(props.data);
    const shows = props.data.map((character) => {
        return <li key={character.id}><Character id={character.id} name={character.fullName} img={character.imageUrl} title={character.title} family={character.family}/></li>
    })
    return (
        <ul className='content__card'>
            {shows}
        </ul>
    );
};



export default CharacterList; 