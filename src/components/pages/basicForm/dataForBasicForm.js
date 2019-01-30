import _ from 'lodash';
import { FormTypeConstants } from 'synapsefi-dev-ui';

/** Required */
export const initialState = () => ({
  email: '',
  lights: true,
});

export const formData = [
  {
    propName: 'lights',
    formType: FormTypeConstants.TYPE_SWITCHBUTTON,
    label: 'Lights',
  },
  {
    propName: 'email',
    formType: FormTypeConstants.TYPE_INPUT,
    label: 'Email',
  },
];

export const handleSubmit = (values, props) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Submitting', values);
      resolve('foo');
    }, 1000);
  });
};

/** Optional Actions */

export const handleValidation = (values, props) => {
  return {
    ...(_.isEmpty(values.email) && { email: 'Email can not be empty' }),
  };
};

export const handleHidden = (values, props) => {
  const { lights } = values;
  return {
    ...(!lights && { email: true }),
  };
};

export const handleCancel = () => {
  console.log('Cancel');
};
