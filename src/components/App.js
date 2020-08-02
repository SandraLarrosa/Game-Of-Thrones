import React, { useState, useReducer } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
/* import getDataFromApi from '../data/getDataFromApi'; */
import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import data from '../data/data.json';
import Searchs from './Searchs';
import CharacterDetail from './CharacterDetail';
import Character from './Character';

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

  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.id;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    })
    return <CharacterDetail character={foundCharacter}/>;
  };

  return (
    <div className='wrapper'>
      <Link to='/'>
        <h1 className='title'>Game Of Thrones</h1>
      </Link>
      <Route exact path='/'>
        <Searchs searchs={handleSearch} />
        <CharacterList characters={filterCharacters} />
      </Route>
      <Switch>
        <Route path='/character/:id' render={renderCharacterDetail} />
      </Switch>
    </div>
  );
}

export default App;
