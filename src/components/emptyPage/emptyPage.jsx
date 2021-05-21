import React from 'react';
import '../startPage/startPage.scss';
import union from '../../assets/icon/Union.svg';

const EmptyPage = () => {    
    return (
        <div className='start-page' >
            <>
                <img src={union } alt='union' className='empty-page__image'/>
                <p className='start-page__content'>User not found</p>
             </>  
        </div>
    )
}

export default EmptyPage;