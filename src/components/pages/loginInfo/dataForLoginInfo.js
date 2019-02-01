import { isRequired } from '../../../helpers/helperFuncs';

export const keys = {
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
  CONFIRM_PASSWORD: 'CONFIRM_PASSWORD',
};

export const labels = {
  [keys.EMAIL]: 'Email',
  [keys.PASSWORD]: 'Password',
  [keys.CONFIRM_PASSWORD]: 'Comfirm Password',
};

export const initialFormValues = {
  [keys.EMAIL]: '',
  [keys.PASSWORD]: '',
  [keys.CONFIRM_PASSWORD]: '',
};

export const initialErrValues = {
  [keys.EMAIL]: '',
  [keys.PASSWORD]: '',
  [keys.CONFIRM_PASSWORD]: '',
};

export const types = {
  [keys.EMAIL]: 'text',
  [keys.PASSWORD]: 'password',
  [keys.CONFIRM_PASSWORD]: 'password',
};

export const errorFuncs = {
  [keys.EMAIL]: [isRequired],
  [keys.PASSWORD]: [isRequired],
  [keys.CONFIRM_PASSWORD]: [isRequired, (a, b) => (a === b ? '' : 'password has to be same')],
};
