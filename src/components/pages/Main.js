import React, { Component } from 'react';
import { Form, Dropdown, SearchInputBar } from 'synapsefi-dev-ui';
import _ from 'lodash';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import dataForMain from './main/dataForMain';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'test@email.com',
      username: 'asdfasdf',
      website: 'http://www.localhost:8080/',
      amount: '',
      date: '',
      phone_number: '',
      user_permission: '',
      card_preferences: [],
      api_version: '',
      from_node: ['CARD-US'],
      description: '',
      other_preference: '',

      isLoading: false,
      searchBarInput: '',
      searchBarType: '',
    };
  }


  getDisabledCollection = () => {
    let result = {};

    if (this.state.username === 'asdf') {
      result['email'] = true;
    }

    result.api_version = true;

    return result;
  };

  getHiddenCollection() {
    let result = {};

    if (this.state.email === 'test2@email.com') {
      result['website'] = true;
    }

    return result;
  }

  updateField = (e, value, field) => {
    console.log(field, value);

    this.setState({ [field]: value });

    // if ((value || value === '') && field){
    //   this.setState({ [field]: value})
    // }
  };

  handleErrorCheck = () => {
    let errors = {};

    if (this.state.email === 'test@email.com') {
      errors['email'] = 'Input a real email address -_-';
    }

    Object.keys(_.omit(this.state, ['isLoading'])).forEach(item => {
      if (_.isEmpty(this.state[item])) errors[item] = 'Field is required';
    });

    return errors;
  };

  handleSubmit = e => {
    if (e) e.preventDefault();

    this.setState({ isLoading: true });

    setTimeout(() => {
      console.log('Submiting this.state in FormApp', this.state);
      this.setState({ isLoading: false });
    }, 2000);
  };

  render() {
    // const formErrors = this.state.formErrors;

    return (
      <div>
        <Form
          data={dataForMain}
          formValues={this.state}
          handleSubmit={this.handleSubmit}
          // submitButtonText="Custom Submit"
          // errors={formErrors}
          // errors={{email: 'testing email validation'}}
          // displayErrorsInstantly={true}

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
              // onClick: () => console.log('submitting') // onClick will get overwritten by handleSubmit
            },
          ]}
          validation={this.handleErrorCheck}
          // validation={() => {
          //   return {email: 'not real email'}
          // }}
          onChange={this.updateField}
          disabledCollection={this.getDisabledCollection()}
          hiddenCollection={this.getHiddenCollection()}
          // onChangeCollection={{
          //   default: this.updateField
          // }}

          // customFooter={<CustomFooter/>}
          isLoading={this.state.isLoading}
        >
          <SearchInputBar
            // options={{
            //   NODE: { text: `in Node ID` },
            //   TRANSACTIONS: { text: `in Transactions ID` },
            //   USER: { text: `in User ID` },
            // }}

            // label="Search Input Bar"
            propName="searchBar"
            search={this.state.searchBarInput}
            type={this.state.searchBarType}
            updateSearchInput={(e, value) => this.updateField(e, value, 'searchBarInput')}
            updateSearchType={(e, value) => this.updateField(e, value, 'searchBarType')}
            placeholder="Search by Node, Transaction, or User Id"
          />

          {/* <TestComponent /> */}
          {/* <h2 style={{ gridColumn: 'span 2' }}>Header</h2> */}
          <Dropdown
            key="test-dropdown"
            // multiselect
            searchable
            value={this.state.other_preference}
            onChange={this.updateField}
            options={[
              { key: 'DEPOSIT-US', text: 'Deposit' },
              { key: 'SUBNET', text: 'Subnet' },
              { key: 'CARD-US', text: 'card' },
            ]}
            propName="other_preference"
            placeholder="Node"
            label="From Node custom"
            // disabled
          />
        </Form>
      </div>
    );
  }
}

export default Main;
