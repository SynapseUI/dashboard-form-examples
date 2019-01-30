import React from 'react';
import styled from 'styled-components';
import { AnchorButton } from 'synapsefi-dev-ui';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import SingleCheckbox from '../../common/SingleCheckbox';
import RenderPropsForIsSelected from '../../renderProps/RenderPropsForIsSelected';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const FlexWrapper = styled.span`
  display: flex;
  height: 24px;
  align-items: center;
  font-size: 14px;
  line-height: 1;
  & > *:not(:last-child) {
    margin-right: 4px;
  }

  margin-bottom: 8px;
`;

const FooterForCompanyInfo = props => {
  return (
    <RenderPropsForIsSelected>
      {({ isSelected, toggleIsSelected }) => {
        return (
          <div style={{ marginTop: '32px' }}>
            <FlexWrapper>
              <SingleCheckbox
                isSelected={isSelected}
                toggleIsSelected={toggleIsSelected}
                style={{ margin: '0 8px 0 0' }}
              />
              <div>I agree to Synapse's</div>
              <AnchorButton style={{ lineHeight: 1 }} text="TOS" color="var(--color-neptune)" />
              <div>&</div>
              <AnchorButton style={{ lineHeight: 1 }} text="Privacy" color="var(--color-neptune)" />
              <div>Policy</div>
            </FlexWrapper>

            <FlexWrapper>
              <div> Already have an account ? </div>
              <AnchorButton style={{ lineHeight: 1 }} text="Sign in" color="var(--color-neptune)" />
            </FlexWrapper>
          </div>
        );
      }}
    </RenderPropsForIsSelected>
  );
};

export default FooterForCompanyInfo;
