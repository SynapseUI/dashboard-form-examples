export const isRequired = str => (str.trim() === '' ? 'Required' : '');

export const fakeApiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { fakeData: 'fakeData' } });
    }, 1000);
  });
};
