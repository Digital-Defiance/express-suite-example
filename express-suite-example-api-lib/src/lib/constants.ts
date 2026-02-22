import { IConstants } from './interfaces/constants';
import { createExpressConstants } from '@digitaldefiance/node-express-suite';

export const Constants: IConstants = {
  ...createExpressConstants('express-suite.digitaldefiance.org', 'express-suite.digitaldefiance.org'),
  Site: 'Express Suite Example Site' as const,
  SiteTagline: 'Digital Defiance MERN Express Suite Example Application' as const,
  SiteDescription: 'An opinionated, secure, extensible Node.js&#x2F;Express service framework built on Digital Defiance cryptography libraries, providing complete backend infrastructure for secure applications.' as const,
  PasswordRegex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
};
