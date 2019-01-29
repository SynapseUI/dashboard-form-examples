import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  margin-right: 16px;
`;

const NavItem = ({ link, text, history }) => {
  return (
    <Wrapper
      onClick={() => {
        history.push(link);
      }}
    >
      {text}
    </Wrapper>
  );
};

export default withRouter(NavItem);
