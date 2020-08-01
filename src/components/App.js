import React, { useState } from 'react';
/* import getDataFromApi from '../data/getDataFromApi'; */
import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import data from '../data/data.json';
import SearchCharacter from './SearchCharacter';
import SearchHouse from './SearchHouse';
import Searchs from './Searchs';



function App() {
  const [characters, setCharacter] = useState(data)

  const [filterSearch, setFilterSearch] = useState([]);

  const handleSearchCharacter = (data) => {
    console.log('manejando los filtros', data);
  }

  const filterCharacter = characters.filter(character => {
    return character.fullName.includes(filterSearch)
  })


  return (
    <div className='wrapper'>
      <h1 className='title'>Game Of Thrones</h1>
      <Searchs />
      <SearchCharacter searchCharacter={handleSearchCharacter} filterSearch={filterSearch} />
      <SearchHouse />
      <CharacterList characters={filterCharacter} />
    </div>
  );
}

export default App;
