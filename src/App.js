import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Cats from './pages/Cats';
import Lotr from './pages/Lotr';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cats" component={Cats} />
        <Route exact path="/lotr" component={Lotr} />
      </Switch>
    </Router>
  );
}

export default App;
