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
  font-size: 30px;
  margin: 0;
  font-weight: 200;
`;

const Description = styled.div`font-size: 14px;`;

const renderDescription = ({ description, children }) => {
  switch (true) {
    case !children && !description:
      return null;

    case !!children:
      return <Description>{children}</Description>;

    case !!description:
      return <Description>{description}</Description>;

    default:
      return <div>something is wrong</div>;
  }
};

const HeaderForSignup = ({ title, description, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {renderDescription({ description, children })}
    </Wrapper>
  );
};

export default HeaderForSignup;
