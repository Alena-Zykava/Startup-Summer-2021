
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './app.scss';
import Header from '../header';
import StartPage from '../startPage';
import MainPage from '../mainPage';


function App() { 
  return (
      <div className="app">
          <Router>
          <Header />
          <div className='page-container'>
                
                  <Route exact path="/" component={StartPage} />
                  <Route path="/:id" render={({ match }) => {
                      const { id } = match.params;
                      return <MainPage userName={id} />
                  }} />           
              
          </div>
          </Router>
    </div>
  );
}

export default App;
