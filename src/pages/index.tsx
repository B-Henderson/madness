import * as React from 'react';
import styled from 'styled-components';

import Parchment from 'components/parchment/Parchment';

const Main = styled.main`
  background: #111111;
  height: 100vh;
`;
// markup
const IndexPage = () => (
  <Main>
    <Parchment />
  </Main>
);

export default IndexPage;
