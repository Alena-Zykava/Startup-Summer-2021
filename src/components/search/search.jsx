import React, { useState } from 'react';
import './search.scss';
import { withRouter } from 'react-router-dom';

const Search = ({ history }) => {
    const [inputSearch, getInputSearch] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        history.push(inputSearch);
        getInputSearch('');
    }

    const handleChange = (e) => {
        getInputSearch(e.target.value);
    }

    return (
        <div className='search'>
            <i className='fas fa-search'></i>
            <form className='search__form' onSubmit={ onSubmit }>
                <input className='search__input'
                    type='search'
                    placeholder='Enter GitHub username'
                    value={inputSearch}
                    onChange={ handleChange }/>
            </form>
            
        </div >        
    )
}

export default withRouter(Search);