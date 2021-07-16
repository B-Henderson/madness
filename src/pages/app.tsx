import React from 'react';
import { Router } from '@reach/router';
import Layout from 'components/layout/Layout';
import PrivateRoute from 'components/private-route/PrivateRoute';
import Login from 'components/login/Login';
import Default from 'components/default/Default';
import AddCharacter from 'components/characters/add-character/AddCharacter';
import SelectCharacter from 'components/characters/select-character/SelectCharacter';

const App = () => (
  <Layout>
    <Router basepath="/app">
      <PrivateRoute path="/my-characters">
        <AddCharacter path="/add" />
        <SelectCharacter path="/select" />
      </PrivateRoute>
      <Login path="/login" />
      <Default path="/" />
    </Router>
  </Layout>
);
export default App;
