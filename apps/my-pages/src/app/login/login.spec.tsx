import { render } from '@testing-library/react';

import Page from './page';

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });
});
