import React from 'react';
import Products from './Products';
import Preview from './Preview';
import Error from './Error';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
function AppRoute() {
    return(
        <Router>
            <Switch>
        <Route exact path='/' component={Products}></Route>
        <Route path='/Preview/:id' component={Preview}></Route>      
        <Route path="*" component={Error}></Route>
        </Switch>
        </Router>
    )
    
}
export default  AppRoute