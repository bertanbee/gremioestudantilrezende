import React from "react";

//importing routing stuff
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//importing global css
import './global.css';

//importing pages 
import Home from './pages/home/Home';
import Membros from './pages/membros/Membros';
import Contato from './pages/contato/Contato';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/membros">
            <Membros />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}