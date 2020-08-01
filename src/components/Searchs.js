import React from 'react';
import SearchCharacter from './SearchCharacter';
import SearchHouse from './SearchHouse';
import '../stylesheets/search.scss';

const Searchs = props => {
    return (
        <form className='content__form'>
            <SearchCharacter  searchs={props.searchs} />
            <SearchHouse searchs={props.searchs}/>
        </form>
    );
};


export default Searchs;