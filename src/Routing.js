import React from "react";
import {
  Switch, Route
} from "react-router-dom";

import Home from './Home';
import Login from './Login';
import Products from './Products';

export default function Routing() {
    return(
        <Switch>
          <Route exact path='/'><Login/></Route>
          <Route path='/home'><Home/></Route>
          <Route exact path='/products'><Products/></Route>
        </Switch>
    )
}

