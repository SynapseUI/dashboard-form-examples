import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  display: grid;
  line-height: 1;
  grid-gap: 8px;
  margin: 36px 0;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  font-weight: 300;
`;

const Description = styled.div`font-size: 14px;`;

const HeaderForSignup = ({ title, description, children }) => {
  return (
    <Wrapper>
      <Title>{title} </Title>
      <Description>{children || description}</Description>
    </Wrapper>
  );
};

export default HeaderForSignup;
