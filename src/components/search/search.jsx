import React, { useState } from 'react';
import './search.scss';
import { withRouter } from 'react-router-dom';

const Search = ({ history }) => {
    const [inputSearch, setInputSearch] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        history.push(inputSearch);
        setInputSearch('');
    }

    const handleChange = (e) => {
        setInputSearch(e.target.value);
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