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
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import {
  types,
  initialFormValues,
  initialErrValues,
  keys,
  labels,
  errorFuncs,
} from './loginInfo/dataForLoginInfo';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const FormWrapper = styled.form`width: 310px;`;

class LoginInfo extends Component {
  state = {
    values: initialFormValues,
    errors: initialErrValues,
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
    const funcs = errorFuncs[objKey];

    let errMessage = '';

    for (let i = 0; i < funcs.length; i++) {
      const func = funcs[i];
      if (objKey === keys.CONFIRM_PASSWORD) {
        errMessage = func(values[keys.CONFIRM_PASSWORD], values[keys.PASSWORD]);
      } else {
        errMessage = func(values[objKey]);
      }

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
        <HeaderForSignup title="Set Up Login" />

        {[keys.EMAIL, keys.PASSWORD, keys.CONFIRM_PASSWORD].map((objKey, idx) => {
          return (
            <Input
              type={types[objKey]}
              autoComplete="i-dont-want-auto-compelte"
              value={values[objKey]}
              key={objKey}
              label={labels[objKey]}
              onChange={(e, value) => this.handleChange(value, objKey)}
              onFocus={() => this.clearError(objKey)}
              onBlur={() => this.displaySingleError(objKey)}
              error={errors[objKey]}
            />
          );
        })}

        <BtnsForSignup handleCancleClick={this.handleCancleClick} />
      </FormWrapper>
    );
  }
}

export default LoginInfo;
