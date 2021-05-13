import React from 'react';
import './mainPage.scss';

import PersonInfo from '../personInfo';

const MainPage = ({ userName }) => {    

    return (
        <div>
            <PersonInfo userName={ userName}/>
            <div className='person-repositories'></div>
        </div>
    )
}

export default MainPage;