import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './component/Welcome';
const Routes = () => (
    <Switch>
        <Route path="/page1" component={Welcome} />
        <Route path="/home" component={() => <p>Hello, Welcome to home.</p>} />
        <Route path="/home/1" component={() => <p>Hello, Welcome to home.</p>} />
        <Route path="/about" component={() => {
            if (localStorage.getItem('user')) {
                return <p>Welcome to about page</p>
            }
            return <Redirect to="/login" />;
        }} />
        <Route path="/contact" component={() => <p>Hello, Welcome to contact page.</p>} />
        <Route path="/login" component={() => <p>Please login!</p>} />
        <Route path="/" component={() => <p>404 Page</p>} />
    </Switch>
);

export default Routes;
