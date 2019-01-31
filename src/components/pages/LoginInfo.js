import React, { Component } from 'react';
import { Input } from 'synapsefi-dev-ui';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import HeaderForSignup from '../common/HeaderForSignup';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import { initialFormValues, initialErrValues, keys, labels } from './loginInfo/dataForLoginInfo';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`width: 310px;`;

class LoginInfo extends Component {
  state = {
    values: initialFormValues,
    errors: initialErrValues,
  };

  handleChange = (e, objKey) => {
    this.setState({
      values: {
        ...this.state.values,
        [objKey]: e.target.value,
      },
    });
  };

  render() {
    return (
      <Wrapper>
        <HeaderForSignup title="Set Up Login" />

        {[keys.EMAIL, keys.PASSWORD, keys.CONFIRM_PASSWORD].map((objKey, idx) => {
          return (
            <Input
              type="text"
              value={this.state.values[objKey]}
              key={objKey}
              label={labels[objKey]}
              onChange={e => this.handleChange(e, objKey)}
            />
          );
        })}

        
      </Wrapper>
    );
  }
}

export default LoginInfo;
