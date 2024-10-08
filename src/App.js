import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './components/pages/Intro';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Project1 from './components/pages/Project1';
import Project2 from './components/pages/Project2';
import Project3 from './components/pages/Project3';
import Project4 from './components/pages/Project4';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/intro' component={Intro} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/project1' component={Project1} />
          <Route path='/project2' component={Project2} />
          <Route path='/project3' component={Project3} />
          <Route path='/project4' component={Project4} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
