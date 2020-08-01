import React from 'react';


const searchCharacter = props => {

    const handleSearch = (ev) => {
        props.searchs({
            value: ev.currentTarget.value, 
            key: 'name',
        });
    }

    return (
        <form>
            <label htmlFor='search'> Search Character: 
            </label>
            <input type='text' id='search' name='search' value={props.filterSearch} onChange={handleSearch}></input>
        </form>
    );
};



export default searchCharacter;