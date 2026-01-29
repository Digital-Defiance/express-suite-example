import { render } from '@testing-library/react';

import ExpressSuiteStarterReactLib from './express-suite-starter-react-lib';

describe('ExpressSuiteStarterReactLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpressSuiteStarterReactLib />);
    expect(baseElement).toBeTruthy();
  });
});
