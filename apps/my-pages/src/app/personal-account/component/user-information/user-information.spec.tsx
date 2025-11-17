import { render } from '@testing-library/react';

import UserInformation from './user-information';

describe('UserInformation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserInformation />);
    expect(baseElement).toBeTruthy();
  });
});
