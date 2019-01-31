import { FormTypeConstants } from 'synapsefi-dev-ui';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import stateOptions from '../../../staticData/stateOptions';
import countryOptions from '../../../staticData/countryOptions';

export const keys = {
  COMPANY_NAME: 'COMPANY_NAME',
  BUSINESS_TYPE: 'BUSINESS_TYPE',
  COMPANY_INDUSTRY: 'COMPANY_INDUSTRY',
  DATE_OF_ORGANIZATION: 'DATE_OF_ORGANIZATION',
  COMPANY_EMAIL: 'COMPANY_EMAIL',
  COMPANY_PHONE_NUMBER: 'COMPANY_PHONE_NUMBER',
  STREET: 'STREET',
  CITY: 'CITY',
  STATE: 'STATE',
  ZIP_CODE: 'ZIP_CODE',
  COUNTRY: 'COUNTRY',
};

export const getInitialFormValues = () => {
  return {
    [keys.COMPANY_NAME]: '',
    [keys.BUSINESS_TYPE]: '',
    [keys.COMPANY_INDUSTRY]: '',
    [keys.DATE_OF_ORGANIZATION]: '',
    [keys.COMPANY_EMAIL]: '',
    [keys.COMPANY_PHONE_NUMBER]: '',
    [keys.STREET]: '',
    [keys.CITY]: '',
    [keys.STATE]: '',
    [keys.ZIP_CODE]: '',
    [keys.COUNTRY]: 'US',
  };
};

export const labels = {
  [keys.COMPANY_NAME]: 'Company Name',
  [keys.BUSINESS_TYPE]: 'Business Type',
  [keys.COMPANY_INDUSTRY]: 'Company Industry',
  [keys.DATE_OF_ORGANIZATION]: 'Date of Organization',
  [keys.COMPANY_EMAIL]: 'Company Email',
  [keys.COMPANY_PHONE_NUMBER]: 'Company Phone Number',
  [keys.STREET]: 'Street',
  [keys.CITY]: 'City',
  [keys.STATE]: 'State',
  [keys.ZIP_CODE]: 'Zip Code',
  [keys.COUNTRY]: 'Country',
};

export const formTypes = {
  [keys.COMPANY_NAME]: FormTypeConstants.TYPE_INPUT,
  [keys.BUSINESS_TYPE]: FormTypeConstants.TYPE_DROPDOWN,
  [keys.COMPANY_INDUSTRY]: FormTypeConstants.TYPE_DROPDOWN,
  [keys.DATE_OF_ORGANIZATION]: FormTypeConstants.TYPE_NUMBERINPUT,
  [keys.COMPANY_EMAIL]: FormTypeConstants.TYPE_INPUT,
  [keys.COMPANY_PHONE_NUMBER]: FormTypeConstants.TYPE_NUMBERINPUT,
  [keys.STREET]: FormTypeConstants.TYPE_INPUT,
  [keys.CITY]: FormTypeConstants.TYPE_INPUT,
  [keys.STATE]: FormTypeConstants.TYPE_DROPDOWN,
  [keys.ZIP_CODE]: FormTypeConstants.TYPE_INPUT,
  [keys.COUNTRY]: FormTypeConstants.TYPE_DROPDOWN,
};

export const types = {
  [keys.DATE_OF_ORGANIZATION]: 'date',
  [keys.COMPANY_PHONE_NUMBER]: 'phone',
};

const allOptions = {
  [keys.BUSINESS_TYPE]: 'customOptions',
  [keys.COMPANY_INDUSTRY]: 'customOptions',
  [keys.STATE]: stateOptions,
  [keys.COUNTRY]: countryOptions,
};

const searchables = {
  [keys.BUSINESS_TYPE]: true,
  [keys.COMPANY_INDUSTRY]: true,
  [keys.STATE]: true,
  [keys.COUNTRY]: true,
};

export default ({ entityTypeOptions, entityScopeOptions }) => {
  return Object.keys(keys).map((key, idx) => {
    const obj = {
      propName: key,
      label: labels[key],
      formType: formTypes[key],
      autoComplete: 'random-placeholder',
    };

    if (allOptions[key]) {
      if (key === keys.BUSINESS_TYPE) {
        obj.options = entityTypeOptions;
      } else if (key === keys.COMPANY_INDUSTRY) {
        obj.options = entityScopeOptions;
      } else {
        obj.options = allOptions[key];
      }
    }

    if (types[key]) {
      obj.type = types[key];
    }

    if (searchables[key]) {
      obj.searchable = true;
    }

    return obj;
  });
};
