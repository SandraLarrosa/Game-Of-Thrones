import React from 'react';
import Show from './Show';
import '../stylesheets/showList.scss';


const ShowList = props => {
    console.log(props.data);
    const shows = props.data.map((show) => {
        return <li key={show.id}><Show id={show.id} name={show.name} img={show.image} rating={show.rating} status={show.status}/></li>
    })
    return (
        <ul className='content__card'>
            {shows}
        </ul>
    );
};



export default ShowList;