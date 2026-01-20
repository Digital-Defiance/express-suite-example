import { IConstants } from './interfaces/constants';
import { createExpressConstants } from '@digitaldefiance/node-express-suite';

export const Constants: IConstants = {
  ...createExpressConstants('express-suite.digitaldefiance.org', 'express-suite.digitaldefiance.org'),
  Site: 'digitaldefiance-express-suite-example' as const,
  SiteTagline: 'Your tagline here' as const,
  SiteDescription: 'Your description here' as const,
  PasswordRegex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
};
