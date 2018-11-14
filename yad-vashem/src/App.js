import React, { Component } from 'react';
import './App.css';
// import CoverPage from './coverPage';
 import {Main} from './main';

import { HashRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
       <HashRouter>
         <Main/>
       </HashRouter>
      
     
      </div>
    );
  }
}

export default App;
