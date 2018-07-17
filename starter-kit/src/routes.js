import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './App';
import About from './routes/about/index';

export default () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/About' component={About}/>
    </Switch>
    </BrowserRouter>
  )
 }
