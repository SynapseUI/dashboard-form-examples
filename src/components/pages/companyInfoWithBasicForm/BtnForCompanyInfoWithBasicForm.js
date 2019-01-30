import React from 'react';
import { Button } from 'synapsefi-dev-ui';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  grid-column-start: 1;
  display: grid;
`;

const BtnForCompanyInfo = () => {
  return (
    <Wrapper style={{ gridColumnStart: 1 }}>
      <Button>Continue </Button>
    </Wrapper>
  );
};

export default BtnForCompanyInfo;
