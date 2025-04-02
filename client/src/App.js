import logo from './logo.svg';
import './App.css';
import React from 'react';
import Ff from './new';
import Aa from './pp'
import Dd from './divv'
import Pp from './page';
import In from './nee';
import Sh from './show';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Sh/>}/>
        <Route path="/cam" element={<Ff/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
