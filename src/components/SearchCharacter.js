import React from 'react';


const searchCharacter = props => {

    const handleSearch = (ev) => {
        props.searchs({
            value: ev.currentTarget.value, 
            key: 'name',
        });
    }

    return (
        <>
            <label htmlFor='search' className='search'> Search Character: 
            </label>
            <input className='inputText' type='text' id='search' name='search' value={props.filterSearch} onChange={handleSearch}></input>
        </>
    );
};



export default searchCharacter;