import { isRequired } from '../../../helpers/helperFuncs';

export const keys = {
  PHONE_OR_EMAIL: 'PHONE_OR_EMAIL',
  PHONE_NUMBER: 'PHONE_NUMBER',
  EMAIL: 'EMAIL',
};

export const labels = {
  [keys.PHONE_OR_EMAIL]: 'How do you want to get verification codes ?',
  [keys.PHONE_NUMBER]: 'Phone Number',
  [keys.EMAIL]: 'Email',
};

export const initialFormValues = {
  [keys.PHONE_OR_EMAIL]: keys.PHONE_NUMBER,
  [keys.PHONE_NUMBER]: '',
  [keys.EMAIL]: '',
};

export const initialErrValues = {
  [keys.PHONE_OR_EMAIL]: '',
  [keys.PHONE_NUMBER]: '',
  [keys.EMAIL]: '',
};

export const errorFuncs = {
  [keys.PHONE_OR_EMAIL]: [isRequired],
  [keys.PHONE_NUMBER]: [isRequired],
  [keys.EMAIL]: [isRequired],
};
