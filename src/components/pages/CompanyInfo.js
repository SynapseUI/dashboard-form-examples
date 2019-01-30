import React, { Component } from 'react';
import { Form, BasicForm } from 'synapsefi-dev-ui';
import _ from 'lodash';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import BtnForCompanyInfo from './companyInfo/BtnForCompanyInfo';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import dataForCompanyInfo, { initialFormValues } from './companyInfo/dataForCompanyInfo';

class CompanyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = initialFormValues;
  }

  updateField = (e, value, field) => {
    this.setState({ [field]: value });
  };

  handleErrorCheck = () => {
    let errors = {};

    if (this.state.email === 'test@email.com') {
      errors['email'] = 'Input a real email address -_-';
    }

    Object.keys(this.state).forEach(field => {
      if (_.isEmpty(this.state[field])) {
        errors[field] = 'Field is required';
      }
    });

    return errors;
  };

  handleSubmit = e => {
    if (e) e.preventDefault();

    setTimeout(() => {
      console.log('Submiting this.state in FormApp', this.state);
      this.setState({ isLoading: false });
    }, 500);
  };

  render() {
    const options = [{ key: 'aaa', text: 'aaaa' }, { key: 'b', text: 'bee' }];
    const formData = dataForCompanyInfo({
      entityTypeOptions: options,
      entityScopeOptions: options,
    });
    console.log('formData: ', formData);

    return (
      <Form
        data={formData}
        formValues={this.state}
        handleSubmit={this.handleSubmit}
        validation={this.handleErrorCheck}
        // btnObjs={[
        //   {
        //     type: 'button', // MUST HAVE TYPE
        //     style: 'tertiary',
        //     text: 'Back',
        //     onClick: () => console.log('cancel'),
        //   },
        //   {
        //     type: 'submit',
        //     style: 'primary',
        //     text: 'Submit',
        //   },
        // ]}
        customFooter={<BtnForCompanyInfo />}
        onChange={this.updateField}
      >
        {/* <div /> */}
      </Form>
    );
  }
}

export default CompanyInfo;
