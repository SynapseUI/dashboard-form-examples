import { FormTypeConstants } from 'synapsefi-dev-ui';

// FormTypeConstants.TYPE_INPUT
// FormTypeConstants.TYPE_NUMBERINPUT
// FormTypeConstants.TYPE_TEXTAREA
// FormTypeConstants.TYPE_RADIOGROUP
// FormTypeConstants.TYPE_CHECKBOXGROUP
// FormTypeConstants.TYPE_DROPDOWN

// type: 'currency',
// type: 'date',
// type: 'phone',

export default [
  {
    isChild: true,
    propName: 'searchBar',
    label: 'test',
    options: {
      NODE: { text: `in Node ID` },
      TRANSACTIONS: { text: `in Transactions ID` },
      USER: { text: `in User ID` },
    },
  },

  {
    formType: FormTypeConstants.TYPE_INPUT,
    // autoFocus: true,
    autoComplete: 'something-new',
    propName: 'email',
    label: 'Email',
    placeholder: 'Enter User Email',
    // className: 'test-input-row',
  },

  {
    formType: FormTypeConstants.TYPE_INPUT,
    propName: 'username',
    label: 'User Name',
    placeholder: 'Enter a User Name',
  },

  {
    formType: FormTypeConstants.TYPE_INPUT,
    propName: 'website',
    label: 'Website',
    placeholder: 'Enter a Website',
    disabled: true,
  },

  {
    formType: FormTypeConstants.TYPE_NUMBERINPUT,
    propName: 'amount',
    type: 'currency',
    label: 'Amount',
    placeholder: 'Enter an Amount',
  },
  {
    formType: FormTypeConstants.TYPE_NUMBERINPUT,
    propName: 'date',
    type: 'date',
    label: 'Birth Date',
  },
  {
    formType: FormTypeConstants.TYPE_NUMBERINPUT,
    propName: 'phone_number',
    type: 'phone',
    // format: "1 (##) ###-####",
    // placeholder: "1 (###) ###-####",
    label: 'Phone Number',
  },

  {
    formType: FormTypeConstants.TYPE_TEXTAREA,
    propName: 'description',
    label: 'Description',
    placeholder: 'Enter a Description',
    description: 'Enter a Description',
    // noGrid: true
    // disabled: true,
  },
  {
    isChild: true,
    propName: 'other_preference',
  },

  {
    formType: FormTypeConstants.TYPE_RADIOGROUP,
    propName: 'user_permission',
    label: 'Permission',
    selectionType: 'classic',
    options: [
      { key: 'SEND-AND-RECEIVE', text: 'Send and Recieve' },
      { key: 'RECEIVE', text: 'Recieve' },
    ],
  },

  {
    formType: FormTypeConstants.TYPE_CHECKBOXGROUP,
    propName: 'card_preferences',
    label: 'Card Preferences',
    selectionType: 'classic',
    options: [{ key: 'VIRTUAL', text: 'Virtual' }, { key: 'PHYSICAL', text: 'Physical' }],
  },

  {
    formType: FormTypeConstants.TYPE_DROPDOWN,
    label: 'API Version: ',
    placeholder: 'V3.1 // KYC 3.0 // Language',
    propName: 'api_version',
    options: [{ key: 'V3.1', text: 'v3.1' }, { key: 'V3', text: 'v3' }],
  },

  {
    formType: FormTypeConstants.TYPE_DROPDOWN,
    label: 'From Node: ',
    placeholder: 'From Node',
    propName: 'from_node',
    multiselect: true,
    searchable: true,
    options: [
      { key: 'DEPOSIT-US', text: 'Deposit' },
      { key: 'SUBNET', text: 'Subnet' },
      { key: 'CARD-US', text: 'card' },
    ],
  },
];
