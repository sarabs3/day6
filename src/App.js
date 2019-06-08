import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import Routes from './Routes';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes />
      </header>
    </div>
  );
}

export default App;
