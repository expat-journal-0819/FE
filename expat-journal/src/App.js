import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
    
    <Route exact path="/" component={LandingPage} />

    <Route path="/ArticlePage" component={ArticlePage} />
       
    </div>
  );
}

export default App;
