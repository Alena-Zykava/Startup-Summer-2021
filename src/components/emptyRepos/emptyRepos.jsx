import React from 'react';
import './emptyRepos.scss';
import imageEmptyRepos from '../../assets/icon/not-repos.svg'

const EmptyRepos = () => {
    return (
        <div className='empty-repos'>
            <div className='empty-repos__image'>
                <img src={imageEmptyRepos} alt='EmptyRepos' />
            </div>
            <p className='empty-repos__content'>Repository list is empty</p>
        </div>
    )
}

export default EmptyRepos;