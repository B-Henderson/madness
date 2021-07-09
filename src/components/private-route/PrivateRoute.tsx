import React, { useContext, useEffect } from 'react';
import { navigate } from 'gatsby';

import { FirebaseContext } from 'components/firebase';
import checkIsClient from 'utils/IsClient';

import { Props } from './PrivateRoute.interface';

const PrivateRoute: React.FC<Props> = ({ children, path = '/app' }: Props) => {
  const { authToken } = useContext(FirebaseContext);

  const isClient = React.useMemo(() => checkIsClient(), []);

  useEffect(() => {
    const checkPermission = (): null => {
      if (!authToken) {
        navigate('/app/login', { replace: true });
        return null;
      }
      return null;
    };

    if (!isClient) return;

    checkPermission();
  }, [authToken, isClient, path]);

  if (!authToken) {
    return null;
  }

  return (<>{children}</>);
};

export default PrivateRoute;
