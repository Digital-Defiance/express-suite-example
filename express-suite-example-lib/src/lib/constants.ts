import { IConstants } from './interfaces/constants';
import { Constants } from '@digitaldefiance/suite-core-lib';

export const AppConstants: IConstants = {
  ...Constants,
  Site: 'Express Suite Example Site' as const,
  SiteTagline: 'Digital Defiance MERN Express Suite Example Application' as const,
  SiteDescription: 'An opinionated, secure, extensible Node.js&#x2F;Express service framework built on Digital Defiance cryptography libraries, providing complete backend infrastructure for secure applications.' as const,
  SiteHostname: 'express-suite.digitaldefiance.org' as const, 
  PasswordRegex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
  UsernameMinLength: 3 as const,
  UsernameMaxLength: 30 as const,
  UsernameRegex: /^[A-Za-z0-9]{3,30}$/,
  PasswordMinLength: 8 as const,
};
