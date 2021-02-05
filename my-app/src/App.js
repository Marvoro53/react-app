import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from './Pages/Home';
// import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
// import Section from "./Components/Section";
import Contactme from './Pages/Contactme';

function App() {
  return (
<>
    <Router>
      <Switch>
        <Route exact path ="/" component={home} />
        <Route exact path ="/contactme" component= {Contactme} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
