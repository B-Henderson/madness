import React from 'react';
import { Router } from '@reach/router';

import Layout from 'components/layout/Layout';
import Paths from 'components/paths/Paths';
import PrivateRoute from 'components/private-route/PrivateRoute';
import Login from 'components/login/Login';
import Default from 'components/default/Default';

const App = () => (
  <Layout>
    <Router basepath="/app">
      <PrivateRoute path="/paths" component={Paths} />
      <Login path="/login" />
      <Default path="/" />
    </Router>
  </Layout>
);
export default App;
