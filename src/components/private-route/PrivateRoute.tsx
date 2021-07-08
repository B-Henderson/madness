import React, { ReactElement } from 'react';
import { navigate } from 'gatsby';
import { isLoggedIn } from 'utils/AuthHelper';

import { Props } from './PrivateRoute.interface';

const PrivateRoute = ({ component: Component, location, ...rest }: Props): ReactElement => {
  if (!isLoggedIn() && location.pathname !== '/app/login') {
    navigate('/app/login', { replace: true });
    return null;
  }

  /* eslint-disable react/jsx-props-no-spreading */
  return <Component {...rest} />;
};

export default PrivateRoute;
