import React from "react"
import '../App.css';
import Navbar from './Navbar'
import {Route, Switch, Link} from 'react-router-dom'
import Header from "./Header";
import Home from "./Home";
import Error from "./Error";
import Random from "./Random";
import Form from "./Form";
import All from "./All";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <Header />
        </Link>
      <div>
        <Navbar />
        <Switch>
          <Route path="/random_words">
            <Random />
          </Route>
          <Route path="/add_words">
            <Form />
          </Route>
          <Route path="/all_words">
            <All />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
