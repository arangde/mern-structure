import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Import miscellaneous routes and other requirements
import App from './components/app';
import NotFoundPage from './components/pages/not-found-page';

import HomePage from './components/pages/home-page';
import ViewProfile from './components/pages/view-profile';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import RequireAuth from './components/auth/require_auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
    <Route path="profile" component={RequireAuth(ViewProfile)} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
