import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

// https://medium.com/@leannezhang/curly-braces-versus-parenthesis-in-reactjs-4d3ffd33128f
const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
    </Switch>
)

export default Router;