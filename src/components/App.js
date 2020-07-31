import React, { useEffect, useState } from 'react';
import getDataFromApi from '../data/getDataFromApi';
import '../stylesheets/App.scss';
import ShowList from './ShowList';



function App() {
  const [shows, setShows] = useState([])

  useEffect(() => {
    getDataFromApi().then(data => {
      setShows(data);
    })
  }, [])


  return (
    <div className='App'>
      <ShowList data={shows}/>
    </div>
  );
}

export default App;
