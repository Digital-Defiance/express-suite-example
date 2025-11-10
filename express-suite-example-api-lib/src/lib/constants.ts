import { IConstants } from './interfaces/constants';
import { createExpressConstants } from '@digitaldefiance/node-express-suite';

export const HOSTNAME = 'digitaldefiance.org' as const;

export const Constants: IConstants = {
  ...createExpressConstants(HOSTNAME),
  Site: 'digitaldefiance-express-suite-example' as const,
  SiteTagline: 'Your tagline here' as const,
  SiteDescription: 'Your description here' as const,
  PasswordRegex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
};
