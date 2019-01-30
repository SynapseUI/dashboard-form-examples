import React, { Component } from 'react';
import { BasicForm } from 'synapsefi-dev-ui';
import _ from 'lodash';

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
} from './companyInfoWithBasicForm/dataForCompanyInfoWithBasicForm';

class CompanyInfoWithBasicForm extends Component {
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
    const formData = dataForCompanyInfoWithBasicForm({
      entityTypeOptions: options,
      entityScopeOptions: options,
    });

    return (
      <div>
        <BasicForm
          data={formData}
          formValues={this.state}
          handleSubmit={this.handleSubmit}
          validation={this.handleErrorCheck}
          customFooter={<BtnForCompanyInfoWithBasicForm />}
          onChange={this.updateField}
        />
        <FooterForCompanyInfoWithBasicForm />
      </div>
    );
  }
}

export default CompanyInfoWithBasicForm;
