import React, { Component } from 'react';
import { BasicForm } from 'synapsefi-dev-ui';
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

  handleSubmit = values => {
    console.log('values: ', values);

    setTimeout(() => {
      console.log('Submiting this.state in FormApp', values);
    }, 500);
  };

  render() {
    const formData = dataForBusinessOwnerInfo();

    return (
      <div>
        <BasicForm
          initialState={initialFormValues}
          formData={formData}
          handleSubmit={this.handleSubmit}
          customFooter={<BtnForBusinessOwner />}
        />
      </div>
    );
  }
}

export default BusinessOwnerInfo;
