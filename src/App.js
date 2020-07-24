import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './template/header'
import Home from './home/home'
import About from './home/about'
import {Route, Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Top/>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </div>
  );
}

export default App;
