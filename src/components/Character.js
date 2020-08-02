import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/character.scss';

const Character = (props) => {
  return (
    <Link to={`/character/${props.id}`}>
      <article className={`card ${props.family}`} id={props.id}>
        <img className='card__img' src={props.img} alt={props.name}></img>
        <h3 className='card__title'>{props.name}</h3>
        <h4 className='card__rename'>{props.title}</h4>
        <span className='card__house'>
          <h4 className='card__house__house'>House:</h4>
          <p className='card__house__family'>{props.family || 'Unkown'}</p>
        </span>
      </article>
    </Link>
  );
};

export default Character;
