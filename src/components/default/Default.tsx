import React from 'react';
import styled from 'styled-components';

import { isLoggedIn } from 'utils/AuthHelper';

const Main = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid red;
    display:grid;
    grid-template-columns: ${isLoggedIn() ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
`;

const Default = () => {
  console.log('default');
  return (
    <Main>
      <div />
    </Main>
  );
};

export default Default;
