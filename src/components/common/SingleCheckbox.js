import React from 'react';
// import styled, { css } from 'styled-components';
import styled from 'styled-components';

import { SvgIcons } from 'synapsefi-dev-ui';

const StyledCheckBox = styled(SvgIcons.check_filled_square)`
  width: 16px;
  margin: ${props => (props.noMargin ? '0' : '0 8px')};
  cursor: pointer;


  border: ${props =>
    props.isSelected ? '1px solid var(--color-arsenic)' : '1px solid var(--color-medium-gray);'};
    
  path {
  fill: ${props => (props.isSelected ? 'var(--color-arsenic)' : 'white')};
  }
`;

const SingleCheckbox = props => {
  const { style, isSelected, toggleIsSelected, className, noMargin = false, size } = props;

  return (
    <StyledCheckBox
      style={style}
      className={className}
      size={size || '16px'}
      isSelected={isSelected}
      noMargin={noMargin}
      onClick={toggleIsSelected}
      {...props}
    />
  );
};

export default SingleCheckbox;
