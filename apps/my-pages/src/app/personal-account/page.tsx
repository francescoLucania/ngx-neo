'use client';

import { Provider } from 'react-redux';
import { store } from '../store/store';
import UserInformation from './component/user-information/user-information';

export function PersonalCabinet() {
  return (
    <section className="section">
      <h1 className="heading-h1">Личный кабинет</h1>
      <Provider store={store}>
        <UserInformation></UserInformation>
      </Provider>
    </section>
  );
}

export default PersonalCabinet;
