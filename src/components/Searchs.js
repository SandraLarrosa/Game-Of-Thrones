import React from 'react';
import SearchCharacter from './SearchCharacter';
import SearchHouse from './SearchHouse';

const Searchs = props => {
    return (
        <div>
            <SearchCharacter  searchs={props.searchs} />
            <SearchHouse searchs={props.searchs}/>
        </div>
    );
};


export default Searchs;