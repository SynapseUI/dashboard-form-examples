// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Main from '../components/pages/Main';
import CompanyInfo from '../components/pages/CompanyInfo';
import BusinessOwnerInfo from '../components/pages/BusinessOwnerInfo';
import LoginInfo from '../components/pages/LoginInfo';
import TwoFactorAuth from '../components/pages/TwoFactorAuth';
import VerifyIdentity from '../components/pages/VerifyIdentity';

export const objKeys = {
  MAIN: 'MAIN',
  COMPANY_INFO: 'COMPANY_INFO',
  BUSINESS_OWNER_INFO: 'BUSINESS_OWNER_INFO',
  LOGIN_INFO: 'LOGIN_INFO',
  TWO_FACTOR_AUTH: 'TWO_FACTOR_AUTH',
  VERIFY_IDENTITY: 'VERIFY_IDENTITY',
};

export const links = {
  [objKeys.MAIN]: '/',
  [objKeys.COMPANY_INFO]: '/company-info',
  [objKeys.BUSINESS_OWNER_INFO]: '/business-owner-info',
  [objKeys.LOGIN_INFO]: '/login-info',
  [objKeys.TWO_FACTOR_AUTH]: '/two-factor-auth',
  [objKeys.VERIFY_IDENTITY]: '/verity-identity',
};

export const texts = {
  [objKeys.MAIN]: 'Main',
  [objKeys.COMPANY_INFO]: 'Company Info',
  [objKeys.BUSINESS_OWNER_INFO]: 'Business Owner Info',
  [objKeys.LOGIN_INFO]: 'Login Info',
  [objKeys.TWO_FACTOR_AUTH]: 'Two Factor Auth',
  [objKeys.VERIFY_IDENTITY]: 'Verify Identity',
};

export const components = {
  [objKeys.MAIN]: Main,
  [objKeys.COMPANY_INFO]: CompanyInfo,
  [objKeys.BUSINESS_OWNER_INFO]: BusinessOwnerInfo,
  [objKeys.LOGIN_INFO]: LoginInfo,
  [objKeys.TWO_FACTOR_AUTH]: TwoFactorAuth,
  [objKeys.VERIFY_IDENTITY]: VerifyIdentity,
};

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

export default Object.keys(objKeys).map((objKey, idx) => {
  return {
    idx,
    objKey,
    link: links[objKey],
    text: texts[objKey],
    component: components[objKey],
  };
});
