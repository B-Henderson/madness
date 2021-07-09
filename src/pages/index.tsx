import React from 'react';

import { navigate } from 'gatsby';
import checkIsClient from 'utils/IsClient';

const IndexPage = (): JSX.Element => {
  if (checkIsClient()) {
    navigate('/app', { replace: true });
  }
  return (
    <main />
  );
};

export default IndexPage;
