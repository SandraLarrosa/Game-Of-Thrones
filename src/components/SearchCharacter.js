import React from 'react';


const searchCharacter = props => {

    const searchCharacter = (ev) => {
        props.searchCharacter({
            value: ev.currentTarget.value, 
            key: 'name',
        });
    }

    return (
        <form>
            <label htmlFor='search'> Search Character: 
            </label>
            <input type='text' id='search' name='search' value={props.filterSearch} onChange={searchCharacter}></input>
        </form>
    );
};



export default searchCharacter;