
import React, { useState } from 'react';

import './app.scss';
import Header from '../header';
//import StartPage from '../startPage';
import MainPage from '../mainPage';


function App() {
    const [userName, getUserName] = useState('');    
  return (
    <div className="app">
          <Header getUserName={ getUserName }/>
          <div className='page-container'>
              {/* <StartPage /> */}
              <MainPage userName={ userName }/>
          </div>
          
    </div>
  );
}

export default App;
