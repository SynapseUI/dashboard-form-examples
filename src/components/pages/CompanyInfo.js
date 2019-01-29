import React, { Component } from 'react';
import { Form } from 'synapsefi-dev-ui';

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

  handleSubmit = e => {
    if (e) e.preventDefault();

    setTimeout(() => {
      console.log('Submiting this.state in FormApp', this.state);
      this.setState({ isLoading: false });
    }, 500);
  };

  render() {
    const formData = dataForCompanyInfo();

    return (
      <Form
        data={formData}
        formValues={this.state}
        handleSubmit={this.handleSubmit}
        btnObjs={[
          {
            type: 'button', // MUST HAVE TYPE
            style: 'tertiary',
            text: 'Cancel',
            onClick: () => console.log('cancel'),
          },
          {
            type: 'submit',
            style: 'primary',
            text: 'Submit',
          },
        ]}
        onChange={this.updateField}
      />
    );
  }
}

export default CompanyInfo;
