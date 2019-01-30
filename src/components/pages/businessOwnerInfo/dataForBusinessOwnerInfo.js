import { FormTypeConstants } from 'synapsefi-dev-ui';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import stateOptions from '../../../staticData/stateOptions';
import countryOptions from '../../../staticData/countryOptions';

export const keys = {
  FULL_NAME: 'FULL_NAME',
  DATE_OF_BIRTH: 'DATE_OF_BIRTH',
  EMAIL: 'EMAIL',
  PHONE_NUMBER: 'PHONE_NUMBER',
  STREET: 'STREET',
  CITY: 'CITY',
  STATE: 'STATE',
  ZIP_CODE: 'ZIP_CODE',
  COUNTRY: 'COUNTRY',
};

export const initialFormValues = {
  [keys.FULL_NAME]: '',
  [keys.DATE_OF_BIRTH]: '',
  [keys.EMAIL]: '',
  [keys.PHONE_NUMBER]: '',
  [keys.STREET]: '',
  [keys.CITY]: '',
  [keys.STATE]: '',
  [keys.ZIP_CODE]: '',
  [keys.COUNTRY]: 'US',
};

export const labels = {
  [keys.FULL_NAME]: 'Full Name',
  [keys.DATE_OF_BIRTH]: 'Date of Birth',
  [keys.EMAIL]: 'Email',
  [keys.PHONE_NUMBER]: 'Phone Number',
  [keys.STREET]: 'Street',
  [keys.CITY]: 'City',
  [keys.STATE]: 'State',
  [keys.ZIP_CODE]: 'Zip Code',
  [keys.COUNTRY]: 'Country',
};

export const formTypes = {
  [keys.FULL_NAME]: FormTypeConstants.TYPE_INPUT,
  [keys.DATE_OF_BIRTH]: FormTypeConstants.TYPE_NUMBERINPUT,
  [keys.EMAIL]: FormTypeConstants.TYPE_INPUT,
  [keys.PHONE_NUMBER]: FormTypeConstants.TYPE_NUMBERINPUT,
  [keys.STREET]: FormTypeConstants.TYPE_INPUT,
  [keys.CITY]: FormTypeConstants.TYPE_INPUT,
  [keys.STATE]: FormTypeConstants.TYPE_DROPDOWN,
  [keys.ZIP_CODE]: FormTypeConstants.TYPE_INPUT,
  [keys.COUNTRY]: FormTypeConstants.TYPE_DROPDOWN,
};

export const types = {
  [keys.DATE_OF_BIRTH]: 'date',
  [keys.PHONE_NUMBER]: 'phone',
};

const allOptions = {
  [keys.STATE]: stateOptions,
  [keys.COUNTRY]: countryOptions,
};

const searchables = {
  [keys.STATE]: true,
  [keys.COUNTRY]: true,
};

export default () => {
  return Object.keys(keys).map((key, idx) => {
    const obj = {
      propName: key,
      label: labels[key],
      formType: formTypes[key],
      autoComplete: 'random-placeholder',
    };

    if (types[key]) {
      obj.type = types[key];
    }

    if (allOptions[key]) {
      obj.options = allOptions[key];
    }

    if (searchables[key]) {
      obj.searchable = true;
    }

    return obj;
  });
};
