import './scss/App.scss';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Event from "./components/Event";
import Roaster from "./components/Roaster";
import Results from "./components/Results";
import Links from "./components/Links";
import Contact from "./components/Contact";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const onSearchChange = (event) => {setSearchValue(event.target.value)};
  return (
    <Router>
      <Layout searchValue={searchValue} onSearchChange={onSearchChange}>
        <Switch>
          <Route exact path ="/" render={() =>  <Home searchValue={searchValue}/>}/>
          <Route path="/about" component={About}/>
          <Route path="/event" component={Event}/>
          <Route path="/roaster" component={Roaster}/>
          <Route path="/results" component={Results}/>
          <Route path="/links" component={Links} />
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Layout>
    </Router>
  );
}