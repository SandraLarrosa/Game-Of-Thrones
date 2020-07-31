import React from 'react';
import Show from './Show';


const ShowList = props => {
    console.log(props.data);
    const shows = props.data.map((show) => {
        return <li key={show.id}><Show id={show.id} name={show.name} img={show.image} rating={show.rating} status={show.status}/></li>
    })
    return (
        <ul>
            {shows}
        </ul>
    );
};



export default ShowList;