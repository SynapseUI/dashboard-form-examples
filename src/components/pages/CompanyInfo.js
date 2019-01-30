import React, { Component } from 'react';
import { Form } from 'synapsefi-dev-ui';
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
import businessEntityTypeOptions from '../../fetchedData/businessEntityTypeOptions';
import entityScopeOptions from '../../fetchedData/entityScopeOptions';

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
    const formData = dataForCompanyInfo({
      entityTypeOptions: businessEntityTypeOptions,
      entityScopeOptions: entityScopeOptions,
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
