import { render } from '@testing-library/react';

import ExpressSuiteExampleReactLib from './express-suite-example-react-lib';

describe('ExpressSuiteExampleReactLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpressSuiteExampleReactLib />);
    expect(baseElement).toBeTruthy();
  });
});
