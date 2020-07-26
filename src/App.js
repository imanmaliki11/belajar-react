import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './template/header'
import Home from './home/home'
import About from './home/about'
import Contact from './home/contact'
import Project from './home/project'
import Portofolio from './home/portofolio'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Top/>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/project' component={Project} />
      <Route exact path='/portofolio' component={Portofolio} />
      <Route exact path='/contact' component={Contact} />
    </div>
  );
}

export default App;
