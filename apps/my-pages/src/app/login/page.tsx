'use client';

import { Provider } from 'react-redux';
import { store } from '../store/store';
import AuthForm from './components/auth-form/auth-form';

export function Page() {
  return (
    <section className={'section'}>
      <Provider store={store}>
        <AuthForm />
      </Provider>
    </section>
  );
}

export default Page;
