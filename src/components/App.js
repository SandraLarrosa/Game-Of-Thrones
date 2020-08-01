import React, { useState } from 'react';
/* import getDataFromApi from '../data/getDataFromApi'; */
import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import data from '../data/data.json';



function App() {
  const [character, setCharacter] = useState(data)


  return (
    <div className='wrapper'>
      <h1 className='title'>Game Of Thrones</h1>
       <CharacterList data={character}/>}
    </div>
  );
}

export default App;
