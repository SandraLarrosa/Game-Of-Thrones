import React from 'react';
import '../stylesheets/show.scss';


const Show = props => {
    return (
        <article className='card' id={props.id}>
            <h3 className='card__title'>{props.name}</h3>
            <div className='card__img'>
                <img src={props.img || 'https://pbs.twimg.com/profile_images/801045148184494081/lBeVchc4_400x400.jpg'}></img>
            </div>
            <p className='card__rating'>{props.rating || 'No Rating'}</p>
            <p className='card__status'>{props.status}</p>
        </article>
    );
};



export default Show;