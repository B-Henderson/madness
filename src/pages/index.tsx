import React from 'react';

import { navigate } from 'gatsby';

const IndexPage = (): JSX.Element => {
  navigate('/app', { replace: true });
  return (
    <main />
  );
};

export default IndexPage;
