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
import HeaderForSignup from '../common/HeaderForSignup';
import BtnForCompanyInfoWithBasicForm from './companyInfoWithBasicForm/BtnForCompanyInfoWithBasicForm';
import FooterForCompanyInfoWithBasicForm from './companyInfoWithBasicForm/FooterForCompanyInfoWithBasicForm';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import dataForCompanyInfoWithBasicForm, {
  getInitialFormValues,
} from './companyInfoWithBasicForm/dataForCompanyInfoWithBasicForm';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
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
    console.log('values: ', values);
  };

  render() {
    const options = [{ key: 'aaa', text: 'aaaa' }, { key: 'b', text: 'bee' }];
    const formData = dataForCompanyInfoWithBasicForm({
      entityTypeOptions: options,
      entityScopeOptions: options,
    });

    return (
      <div>
        <HeaderForSignup
          title="Get started with SynapseFI"
          description="Tell us more about your company"
        />
        <BasicForm
          initialState={getInitialFormValues}
          formData={formData}
          handleSubmit={this.handleSubmit}
          customFooter={<BtnForCompanyInfoWithBasicForm />}
        />
        <FooterForCompanyInfoWithBasicForm />
      </div>
    );
  }
}

export default CompanyInfoWithBasicForm;
