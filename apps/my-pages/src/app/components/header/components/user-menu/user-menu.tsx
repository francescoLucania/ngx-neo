'use client';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';
import PersonalCabinetButton from '../personal-cabinet-button/personal-cabinet-button';

export function UserMenu() {
  return (
    <Provider store={store}>
      <PersonalCabinetButton />
    </Provider>
  );
}

export default UserMenu;
