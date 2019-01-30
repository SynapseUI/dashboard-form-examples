import React from 'react';
import { Button } from 'synapsefi-dev-ui';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  grid-column-start: 1;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 32px;
  padding-top: 16px;
`;

const BtnForBusinessOwner = () => {
  return (
    <Wrapper style={{ gridColumnStart: 1 }}>
      <Button secondary type="button">
        Back
      </Button>
      <Button type="submit"> Continue </Button>
    </Wrapper>
  );
};

export default BtnForBusinessOwner;
