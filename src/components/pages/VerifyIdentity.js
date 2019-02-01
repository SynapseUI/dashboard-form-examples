import React, { Component } from 'react';
import { Input } from 'synapsefi-dev-ui';
import styled from 'styled-components';
import { isEmpty } from 'lodash';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import HeaderForSignup from '../common/HeaderForSignup';
import BtnsForSignup from '../common/BtnsForSignup';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import { isRequired } from '../../helpers/helperFuncs';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
const AUTH_CODE = 'AUTH_CODE';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const FormWrapper = styled.form`width: 400px;`;

class VerifyIdentity extends Component {
  state = {
    values: { [AUTH_CODE]: '' },
    errors: { [AUTH_CODE]: '' },
  };

  handleChange = (value, objKey) => {
    this.setState({
      values: {
        ...this.state.values,
        [objKey]: value,
      },
    });
  };

  clearError = objKey => {
    this.setState({
      errors: {
        ...this.state.errors,
        [objKey]: '',
      },
    });
  };

  displaySingleError = (objKey, isSubmit) => {
    const { values, errors } = this.state;
    const funcs = [isRequired];

    let errMessage = '';

    for (let i = 0; i < funcs.length; i++) {
      const func = funcs[i];
      errMessage = func(values[objKey]);

      // if there is error don't need to invoke next error check
      if (!isEmpty(errMessage)) break;
    }

    if (isSubmit) {
      return errMessage;
    }

    if (errors[objKey] !== errMessage) {
      this.setState({
        errors: {
          ...this.state.errors,
          [objKey]: errMessage,
        },
      });
    }
  };

  displayErrorsIfAny = () => {
    const { values } = this.state;

    let anyError = false;

    const errors = Object.keys(values).reduce((acc, objKey) => {
      const errorMessage = this.displaySingleError(objKey, true);

      if (!isEmpty(errorMessage)) {
        anyError = true;
      }

      acc[objKey] = errorMessage;

      return acc;
    }, {});

    this.setState({ errors });
    return anyError;
  };

  handleCancleClick = e => {
    console.log('cancel click');
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.displayErrorsIfAny()) {
      const { values } = this.state;
      console.log('values: ', values);
    }
  };

  render() {
    const { values, errors } = this.state;

    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <HeaderForSignup title="Verify Identity">
          <div>Enter the 6 digit code we sent to 019283012983</div>
          <div>Didn't receive a code ? Resend</div>
        </HeaderForSignup>

        <Input
          autoComplete="i-dont-want-auto-compelte"
          value={values[AUTH_CODE]}
          label="Authentication Code"
          onChange={(e, value) => this.handleChange(value, AUTH_CODE)}
          onFocus={() => this.clearError(AUTH_CODE)}
          onBlur={() => this.displaySingleError(AUTH_CODE)}
          error={errors[AUTH_CODE]}
        />

        <BtnsForSignup handleCancleClick={this.handleCancleClick} />
      </FormWrapper>
    );
  }
}

export default VerifyIdentity;
