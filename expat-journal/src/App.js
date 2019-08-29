import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';
import { Route,} from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (
   
    <div className="App">

    <Header />
    
    <Route exact path="/" component={LandingPage} />

    <Route path="/ArticlePage/:id" component={ArticlePage} />

    {/* add routing for profile here*/}
       
    </div>
  );
}

export default App;
