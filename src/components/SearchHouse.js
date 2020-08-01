import React from 'react';


const SearchHouse = props => {

    const searchCharacter = (ev) => {
        props.searchCharacter({
            value: ev.currentTarget.value, 
            key: 'name',
        });
    }

    return (
        <form>
            <label htmlFor='searchHouse'> HOUSES: 
            </label>
            <select className='select' name='house' id='searchHouse'>
                <option value="">Stark</option>
                <option value="">Targaryen</option>
                <option value="">Baratheon</option>
                <option value="">Lannister</option>
                <option value="">GreyJoy</option>
                <option value="">Tyrrel</option>
                <option value="">Bolton</option>
            </select>
        </form>
    );
};



export default SearchHouse;