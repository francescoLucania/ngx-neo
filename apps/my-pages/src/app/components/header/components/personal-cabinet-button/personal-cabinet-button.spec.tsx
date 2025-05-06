import { render } from '@testing-library/react';

import PersonalCabinetButton from './personal-cabinet-button';

describe('PersonalCabinetButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PersonalCabinetButton />);
    expect(baseElement).toBeTruthy();
  });
});
