import React, { useState } from 'react';
import './startPage.scss';
import union from '../../assets/icon/Union.svg';

const StartPage = () => {
    const [isEmptyPage, getIsEmptyPage] = useState(false);
    const startPage = () => {
        return (
            <>
                <i className='fas fa-search'></i>
                <p className='start-page__content'>Start with searching <br /> a GitHub user</p>
             </>   
        )
    }
    const emptyPage = () => {
        return (
            <>
                <img src={union } alt='union' className='empty-page__image'/>
                <p className='start-page__content'>User not found</p>
             </>   
        )
    }
    const content = isEmptyPage ? emptyPage() : startPage();
    
    return (
        <div className='start-page' getIsEmptyPage={() => getIsEmptyPage}>
            {content}
        </div>
    )
}

export default StartPage;
