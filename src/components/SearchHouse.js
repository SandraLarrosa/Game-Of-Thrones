import React from 'react';


const SearchHouse = props => {

    const handleSearch = (ev) => {
        props.searchs({
            value: ev.currentTarget.value, 
            key: 'house',
        });
    }

    return (
        <>
            <label className='search' htmlFor='searchHouse'> HOUSES: 
            </label>
            <select className='select' name='house' id='searchHouse' onChange={handleSearch}>
                <option value="all">Todos</option>
                <option value="Stark">Stark</option>
                <option value="Targaryen">Targaryen</option>
                <option value="Baratheon">Baratheon</option>
                <option value="Lannister">Lannister</option>
                <option value="Greyjoy">GreyJoy</option>
                <option value="Tyrell">Tyrell</option>
                <option value="Bolton">Bolton</option>
            </select>
        </>
    );
};



export default SearchHouse;