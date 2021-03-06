import React from 'react';
import './App.scss';
import Header from  './comps/Header'
import Intro from './comps/Intro'
import Project from './comps/Project';
import ETC from './comps/ETC';
import OpenSource from './comps/OpenSource'
import AboutMe from './comps/AboutMe';
import Contact from './comps/Contact';




const App = () => {

  React.useEffect(() => {
    if(process.env.NODE_ENV === 'production') {
      window['console']['log'] = function() {};
      window['console']['debug'] = function() {};
      window['console']['error'] = function() {};
      window['console']['warn'] = function() {};
    }
  }, [])

  return (
    <div className="App">
      
      <Intro />
      <Header />
      <Project />
      <OpenSource />
      <ETC />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
