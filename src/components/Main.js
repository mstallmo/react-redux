import React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage} />
    </Switch>
);
export default Main;
