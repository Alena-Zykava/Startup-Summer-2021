import React from 'react';
import './header.scss';

import Search from '../search/';

const Header = ({ getUserName }) => {    
    return (
        <div className='header'>
            <div className='header__container'>
                <i className='fab fa-github'></i>
                <Search getUserName={ getUserName }/>
            </div>
            
        </div>
    )
}

export default Header;