import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={AboutPage} />
    </Switch>
);
