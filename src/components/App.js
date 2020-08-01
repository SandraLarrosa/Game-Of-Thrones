import React, { useState } from 'react';
/* import getDataFromApi from '../data/getDataFromApi'; */
import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import data from '../data/data.json';
import Searchs from './Searchs';

function App() {
  const [characters, setCharacter] = useState(data);
  const [nameFilter, setNameFilter] = useState('');
  const [nameHouse, setHouseFilter] = useState('all');

  //Función manejadora de evento
  const handleSearch = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'house') {
      setHouseFilter(data.value);
    }
  };


  //Filtrado de personajes
  const filterCharacters = characters
    .filter((character) => {
      return character.fullName
        .toUpperCase()
        .includes(nameFilter.toUpperCase());
    })
    .filter((house) => {
      return nameHouse === 'all' ? true : house.family === nameHouse;
    });

  return (
    <div className='wrapper'>
      <h1 className='title'>Game Of Thrones</h1>
      <Searchs searchs={handleSearch} />
      <CharacterList characters={filterCharacters} />
    </div>
  );
}

export default App;
