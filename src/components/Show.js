import React from 'react';


const Show = props => {
    return (
        <article id={props.id}>
            <h3>{props.name}</h3>
            <img src={props.img}></img>
            <p>{props.rating}</p>
            <p>{props.status}</p>
        </article>
    );
};



export default Show;