import React, { Component } from 'react';
import { Input, RadioGroup, NumberInput } from 'synapsefi-dev-ui';
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
  initialFormValues,
  initialErrValues,
  keys,
  labels,
  errorFuncs,
} from './twoFactorAuth/dataForTwoFactorAuth';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const FormWrapper = styled.form`width: 440px;`;

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
    console.log('errMessage: ', errMessage);

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

    const firstKey = keys.PHONE_OR_EMAIL;
    const secondKey = values[firstKey];

    const errMessage = this.displaySingleError(secondKey, true);

    if (isEmpty(errMessage)) {
      return false;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        [secondKey]: errMessage,
      },
    });

    return true;
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

    const firstKey = keys.PHONE_OR_EMAIL;
    const secondKey = values[firstKey];

    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <HeaderForSignup
          title="Two-Factor Authentication"
          description="To keep your account secure we will send you a verification code."
        />

        <RadioGroup
          value={values[firstKey]}
          options={[
            { key: keys.PHONE_NUMBER, text: 'Receive codes via SMS' },
            { key: keys.EMAIL, text: 'Receive codes via email' },
          ]}
          label={labels[firstKey]}
          onChange={(e, value) => this.handleChange(value, firstKey)}
        />

        {values[firstKey] === keys.PHONE_NUMBER ? (
          <NumberInput
            type="phone"
            autoComplete="i-dont-want-auto-compelte"
            value={values[secondKey]}
            label={labels[secondKey]}
            onChange={(e, value) => this.handleChange(value, secondKey)}
            onFocus={() => this.clearError(keys.PHONE_NUMBER)}
            onBlur={() => this.displaySingleError(keys.PHONE_NUMBER)}
            error={errors[keys.PHONE_NUMBER]}
          />
        ) : (
          <Input
            type="email"
            autoComplete="i-dont-want-auto-compelte"
            value={values[secondKey]}
            label={labels[secondKey]}
            onChange={(e, value) => this.handleChange(value, secondKey)}
            onFocus={() => this.clearError(keys.EMAIL)}
            onBlur={() => this.displaySingleError(keys.EMAIL)}
            error={errors[keys.EMAIL]}
          />
        )}

        <BtnsForSignup handleCancleClick={this.handleCancleClick} />
      </FormWrapper>
    );
  }
}

export default LoginInfo;
