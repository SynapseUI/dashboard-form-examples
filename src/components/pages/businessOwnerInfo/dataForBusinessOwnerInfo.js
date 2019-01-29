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

export const initialFormValues = {
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
  [keys.COUNTRY]: '',
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

export default () => {
  return Object.keys(keys).map((key, idx) => {
    return {
      propName: key,
      label: labels[key],
    };
  });
};
