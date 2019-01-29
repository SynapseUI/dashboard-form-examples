import React, { Component } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Head from './layout/Head';
import Body from './layout/Body';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  display: grid;
  padding: 40px 80px;
  grid-row-gap: 20px;
`;

class Layout extends Component {
  render() {
    return (
      <Wrapper>
        <Head />
        <Body />
      </Wrapper>
    );
  }
}

export default Layout;
