import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
//components
import Header from './components/Header';
//pages
import Home from './pages/Home';
import Model from './pages/Model';

function App() {
  return (
    <>
      <Header />
        <Route 
          render={({location}) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/model/:id" component={Model} />
              </Switch>
            </AnimatePresence>
          )}
        />
    </>
  );
}

export default App;
