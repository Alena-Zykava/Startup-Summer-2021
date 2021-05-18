import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

import Search from '../search/';

const Header = () => {    
    return (
        <div className='header'>
            <div className='header__container'>
                <Link to='/' >
                    <i className='fab fa-github'></i>
                </Link>                
                <Search />
            </div>
            
        </div>
    )
}

export default Header;