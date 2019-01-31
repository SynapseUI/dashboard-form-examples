import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Button } from 'synapsefi-dev-ui';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const StyledButton = styled(Button)`
  cursor: pointer;
  /* padding: 8px 20px; */
  margin: 8px 16px 8px 0;
`;

const NavItem = ({ link, text, history }) => {
  return (
    <StyledButton
      // secondary
      small
      onClick={() => {
        history.push(link);
      }}
    >
      {text}
    </StyledButton>
  );
};

export default withRouter(NavItem);
