import React, { useState } from 'react';
import './search.scss';

const Search = ({ getUserName }) => {
    const [inputSearch, getInputSearch] = useState('');

    const onSubmit = (e) => {
        getUserName(inputSearch);
        console.log(inputSearch);
        e.preventDefault();
    }

    const handleChange = (e) => {
        getInputSearch(e.target.value);
    }

    return (
        <div className='search'>
            <i className='fas fa-search'></i>
            <form onSubmit={ onSubmit }>
                <input className='search__input'
                    type='search'
                    placeholder='Enter GitHub username'
                    onChange={ handleChange }/>
            </form>
            
        </div >        
    )
}

export default Search;