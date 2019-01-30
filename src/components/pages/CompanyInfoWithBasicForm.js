import React, { Component } from 'react';
import { BasicForm } from 'synapsefi-dev-ui';
import _ from 'lodash';

// initialState
// formData
// handleSubmit
// handleValidation
// handleHidden
// handleCancel

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import BtnForCompanyInfoWithBasicForm from './companyInfoWithBasicForm/BtnForCompanyInfoWithBasicForm';
import FooterForCompanyInfoWithBasicForm from './companyInfoWithBasicForm/FooterForCompanyInfoWithBasicForm';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import dataForCompanyInfoWithBasicForm, {
  initialFormValues,
  handleSubmit,
} from './companyInfoWithBasicForm/dataForCompanyInfoWithBasicForm';

class CompanyInfoWithBasicForm extends Component {
  handleErrorCheck = values => {
    let errors = {};

    Object.keys(values).forEach(field => {
      if (_.isEmpty(values[field])) {
        errors[field] = 'Field is required';
      }
    });

    return errors;
  };

  handleSubmit = values => {
    // if (e) e.preventDefault();
    console.log('aa');
    setTimeout(() => {
      console.log('Submiting this.state in FormApp', values);
      this.setState({ isLoading: false });
    }, 500);
  };

  render() {
    const options = [{ key: 'aaa', text: 'aaaa' }, { key: 'b', text: 'bee' }];
    const formData = dataForCompanyInfoWithBasicForm({
      entityTypeOptions: options,
      entityScopeOptions: options,
    });

    return (
      <div>
        <BasicForm
          initialState={initialFormValues}
          formData={formData}
          // handleSubmit={this.handleSubmit}
          handleSubmit={handleSubmit}
          handleValidation={this.handleErrorCheck}
          customFooter={<BtnForCompanyInfoWithBasicForm />}
        />
        <FooterForCompanyInfoWithBasicForm />
      </div>
    );
  }
}

export default CompanyInfoWithBasicForm;
