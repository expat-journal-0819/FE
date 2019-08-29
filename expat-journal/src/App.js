import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import TabNav from "./components/TabNav.js";

function App() {
  return (
   
    <div className="App">

    <Header />
    <TabNav />
    <Route exact path="/" component={LandingPage} />

    <Route path="/ArticlePage" component={ArticlePage} />

    {/* add routing for profile here*/}
       
    </div>
  );
}

export default App;
