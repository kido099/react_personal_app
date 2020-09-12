import { Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import styles from './index.module.css';
/* import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register'; */

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

// https://medium.com/@leannezhang/curly-braces-versus-parenthesis-in-reactjs-4d3ffd33128f
const Router = () => (
  <Suspense
    fallback={
      <div className={styles.spinWrap}>
        <Spin size="large" />
      </div>
    }
  >
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
    </Switch>
  </Suspense>
)

export default Router;