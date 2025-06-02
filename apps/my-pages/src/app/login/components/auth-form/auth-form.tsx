import styles from './auth-form.module.scss';
import { Fragment, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../store/features/user/user.store';
import Input from '../../../components/input/input';
import { RegistrationBody } from '@nx-neo-models';

// const RegistrationFormInitialState: RegistrationBody = {
//   email: '',
//   phone: '',
//   name: '',
//   fullName: '',
//   gender: '',
//   dateIssue: '',
//   password: '',
// };

const RegistrationFormInitialState: Map<keyof RegistrationBody, string> =
  new Map([
    ['email', ''],
    ['phone', ''],
    ['name', ''],
    ['fullName', ''],
    ['gender', ''],
    ['dateIssue', ''],
    ['password', ''],
  ]);

const RegistrationFormLabels: Map<keyof RegistrationBody, string> = new Map([
  ['email', 'Эл. почта'],
  ['phone', 'Телефон'],
  ['name', 'Имя'],
  ['fullName', 'Фио'],
  ['gender', 'Пол'],
  ['dateIssue', 'Дата рождения'],
  ['password', 'Пароль'],
]);

function reducer(
  state: Map<keyof RegistrationBody, string>,
  action: { type: keyof RegistrationBody; payload: string }
) {
  const newState = new Map(state);

  if (state.get(action.type) !== undefined) {
    newState.set(action.type, action.payload);
  } else {
    throw new Error('registrationFormState update error');
  }

  return newState;
}

export function AuthForm() {
  const [loginState, setLoginState] = useState<'login' | 'registration'>(
    'login'
  );
  const [registrationFormState, registrationFormDispatch] = useReducer(
    reducer,
    RegistrationFormInitialState
  );

  const [registrationFormPristine, updateRegistrationFormPristine] =
    useState(true);

  const dispatch = useDispatch();

  const changeLoginState = () =>
    setLoginState(loginState === 'login' ? 'registration' : 'login');

  const registrationView = () =>
    [...registrationFormState.keys()]?.map(
      (key: keyof RegistrationBody, index: number) => {
        const keyVal = registrationFormState.get(key);

        if (keyVal === undefined) {
          return null;
        }

        return (
          <div className={'mt-16'} key={`reg-input-${index}`}>
            <div className={'mb-4'}>{RegistrationFormLabels.get(key)}</div>
            <Input
              autofocus={index === 0}
              type={key === 'email' ? 'email' : 'text'}
              value={keyVal}
              invalid={!registrationFormPristine && !keyVal.length}
              key={`reg-input-${index}`}
              inputChange={(value) =>
                changeRegistrationForm({ type: key, payload: value })
              }
            />
          </div>
        );
      }
    );

  const changeRegistrationForm = ({ type, payload }) =>
    registrationFormDispatch({ type, payload });

  const registration = () => {
    for (const item of registrationFormState.values()) {
      if (!item.length) {
        updateRegistrationFormPristine(false);
        return null;
      }
    }

    updateRegistrationFormPristine(false);
    const result = Object.fromEntries(
      registrationFormState
    ) as Required<RegistrationBody>;
    return dispatch(createUser(result));
  };

  const form = () => {
    if (loginState === 'login') {
      return (
        <div>
          <div>
            <div className={'mb-4'}>Логин</div>
            <Input
              autofocus={true}
              value={''}
              key={'0'}
              inputChange={changeLogin}
            />
          </div>
          <div className={'mt-24'}>
            <div className={'mb-4'}>Пароль</div>
            <Input value={''} key={'1'} inputChange={changeLogin} />
          </div>
        </div>
      );
    } else if (loginState === 'registration') {
      return registrationView();
    }
  };

  const changeLogin = (val: string) => {
    console.log(val);
  };

  return (
    <form className={styles.form}>
      {form()}

      {loginState === 'registration' ? (
        <div className={'mt-32 text-center'}>
          <button type="button" onClick={registration}>
            Зарегистрироваться
          </button>
        </div>
      ) : (
        ''
      )}

      <div className={'mt-32 text-center'}>
        <button type="button" onClick={changeLoginState}>
          {loginState === 'login' ? 'Регистрация' : 'Вход'}
        </button>
      </div>
    </form>
  );
}

export default AuthForm;
