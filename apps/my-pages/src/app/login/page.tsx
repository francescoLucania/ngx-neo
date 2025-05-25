'use client';

import styles from './page.module.scss';
import { Fragment, useReducer, useState } from 'react';
import Input from '../components/input/input';
import { RegistrationBody } from '@nx-neo-models';

const RegistrationFormInitialState: RegistrationBody = {
  email: '',
  phone: '',
  name: '',
  fullName: '',
  gender: '',
  dateIssue: '',
  password: '',
}

type keys = keyof RegistrationBody;

function reducer(state: RegistrationBody, action: {type: keys, payload: string} ) {
  const newState = {
    ...state
  }

  if (action.type in newState) {
    newState[action.type] = action.payload
  } else {
    throw new Error('registratinFormState update error');
  }

  return newState
}

export function Page() {
  const [loginState, setLoginState] = useState<'login' | 'registration'>('login');
  const [registratinFormState, registratinFormDispatch] = useReducer(reducer, RegistrationFormInitialState);


  const changeLoginState = () => setLoginState(loginState === 'login' ? 'registration' : 'login');

  const form = () => {

    if (loginState === 'login') {
      return <Fragment>

        <div>
          <div className={'mb-4'}>Логин</div>
          <Input autofocus={true} value={''}
                 key={'0'}
                 inputChange={changeLogin} />
        </div>
        <div className={'mt-24'}>
          <div className={'mb-4'}>Пароль</div>
          <Input value={''} inputChange={changeLogin} />
        </div>

      </Fragment>
        ;
    } else if (loginState === 'registration') {
      return <Fragment>
        <div>
          <div className={'mb-4'}>Имя</div>
          <Input autofocus={true} value={registratinFormState.name}
                 key={'1'}
                 inputChange={(value) => registratinFormDispatch({type: 'name', payload: value})}
          />
        </div>

        <div className={'mt-24'}>
          <div className={'mb-4'}>ФИО</div>
          <Input value={registratinFormState.fullName}
                 inputChange={(value) => registratinFormDispatch({type: 'fullName', payload: value})}
          />
        </div>

        <div className={'mt-24'}>
          <div className={'mb-4'}>email</div>
          <Input value={registratinFormState.email}
                 inputChange={(value) => registratinFormDispatch({type: 'email', payload: value})}
          />
        </div>

        <div className={'mt-24'}>
          <div className={'mb-4'}>Телефон</div>
          <Input value={registratinFormState.phone}
                 inputChange={(value) => registratinFormDispatch({type: 'phone', payload: value})}
          />
        </div>

        <div className={'mt-24'}>
          <div className={'mb-4'}>Дата рождения</div>
          <Input value={registratinFormState.dateIssue}
                 inputChange={(value) => registratinFormDispatch({type: 'dateIssue', payload: value})}
          />
        </div>
      </Fragment>
        ;
    }
  }

  const changeLogin = (val: string) => {
    console.log(val)
  }

  return (
    <section className={'section'}>
      <form className={styles.form}>
        {form()}

        <div className={'mt-32'}>
          <button type="button" onClick={changeLoginState}>
            {loginState === 'login' ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </div>
      </form>

    </section>

  )
}

export default Page;
