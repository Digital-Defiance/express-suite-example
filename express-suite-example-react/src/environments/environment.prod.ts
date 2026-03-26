import { IAppConfig } from '@digitaldefiance/express-suite-react-components';
import { IEnvironment } from '../interfaces/environment';

const appConfig: IAppConfig | undefined =
  'APP_CONFIG' in window
    ? ((window as any).APP_CONFIG as IAppConfig)
    : undefined;

const server = appConfig?.server;

export const environment: IEnvironment = {
  production: false,
  siteUrl: server ?? 'https://express-suite.digitaldefiance.org',
  apiUrl:
    server !== undefined ? `${server}/api` : 'https://express-suite.digitaldefiance.org/api',
};
