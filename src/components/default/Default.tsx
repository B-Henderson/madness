import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid red;
    display:grid;    
`;

const Default = () => (
  <Main>
    <div>this is default</div>
  </Main>
);

export default Default;
