import React, { Component } from 'react';
import { Form, BasicForm } from 'synapsefi-dev-ui';
import _ from 'lodash';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import BtnForCompanyInfo from './companyInfo/BtnForCompanyInfo';
import FooterForCompanyInfo from './companyInfo/FooterForCompanyInfo';

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

    return (
      <div>
        <Form
          data={formData}
          formValues={this.state}
          handleSubmit={this.handleSubmit}
          validation={this.handleErrorCheck}
          customFooter={<BtnForCompanyInfo />}
          onChange={this.updateField}
        />
        <FooterForCompanyInfo />
      </div>
    );
  }
}

export default CompanyInfo;
