import { render } from '@testing-library/react';

import PersonalCabinet from './page';

describe('PersonalCabinet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PersonalCabinet />);
    expect(baseElement).toBeTruthy();
  });
});
