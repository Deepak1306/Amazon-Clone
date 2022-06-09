
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login';
function App() {
  return (
    <Router>
    <div className="app">
         <Switch>
          <Route path="/checkout" exact>
          <Navbar/>
          <Checkout/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/prime" exact> 
          </Route>
          <Route path="/" exact>
          <Navbar/>
          <Home/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
