import React, { Component } from 'react';
import { Form } from 'synapsefi-dev-ui';
import _ from 'lodash';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import BtnForBusinessOwner from './businessOwnerInfo/BtnForBusinessOwner';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import dataForBusinessOwnerInfo, {
  keys,
  initialFormValues,
} from './businessOwnerInfo/dataForBusinessOwnerInfo';

class BusinessOwnerInfo extends Component {
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

      if (field === keys.FULL_NAME) {
        if (this.state[field].split(' ').length < 2) {
          errors[keys.FULL_NAME] = 'Space between first and last name is required';
        }
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
    const formData = dataForBusinessOwnerInfo();

    return (
      <div>
        <Form
          data={formData}
          formValues={this.state}
          handleSubmit={this.handleSubmit}
          validation={this.handleErrorCheck}
          customFooter={<BtnForBusinessOwner />}
          onChange={this.updateField}
        />
      </div>
    );
  }
}

export default BusinessOwnerInfo;
