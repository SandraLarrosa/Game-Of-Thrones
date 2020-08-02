import React from 'react';
import '../stylesheets/characterDetail.scss';

const CharacterDetail = (props) => {
    console.log(props.character);
  return (
    <div className='contain__character'>
      <article className='card__character' id={props.character.id}>
        <div className='card__character__img'>
          <img
            src={props.character.imageUrl}
            alt={props.character.fullName}
          ></img>
        </div>
        <div className='card__character__info'>
          <h3 className='card__character__info--name'>{props.character.fullName}</h3>
          <h4 className='card__character__info--title'>{props.character.title}</h4>
          <h4 className='card__character__info--house'>House:</h4>
          <p className='card__character__info--family'>{props.character.family}</p>
        </div>
      </article>
    </div>
  );
};

export default CharacterDetail;
