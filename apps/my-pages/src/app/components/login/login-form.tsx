import Input from '../input/input';
import { LoginBody } from '@nx-neo-models';
import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/features/user/thunk/login-in';

const LoginFormInitialState: Map<keyof LoginBody, string> =
  new Map([
    ['login', ''],
    ['password', ''],
  ]);

function loginFormReducer(
  state: Map<keyof LoginBody, string>,
  action: { type: keyof LoginBody; payload: string }
) {
  const newState = new Map(state);

  if (state.get(action.type) !== undefined) {
    newState.set(action.type, action.payload);
  } else {
    throw new Error('loginFormState update error');
  }

  return newState;
}


export function LoginForm() {
  const dispatch = useDispatch();

  const [loginFormState, loginFormDispatch] = useReducer(
    loginFormReducer,
    LoginFormInitialState
  );


  const loginIn = () => {

    const result = Object.fromEntries(
      loginFormState
    ) as Required<LoginBody>;

    dispatch(loginUser(result))
  }

  const changeLogin = ({ type, payload }) => loginFormDispatch({ type, payload });

  return (
    <div>
      <div>
        <div className={'mb-4'}>Логин</div>
        <Input
          type='text'
          autofocus={true}
          value={loginFormState.get('login')}
          key={'0'}
          inputChange={(value) => changeLogin({type: 'login', payload: value} )}
        />
      </div>
      <div className={'mt-24'}>
        <div className={'mb-4'}>Пароль</div>
        <Input type='text'
               value={loginFormState.get('password')}
               key={'1'}
               inputChange={(value) => changeLogin({type: 'password', payload: value} )}
        />
      </div>

      <div className={'mt-32 text-center'}>
        <button type="button" onClick={loginIn}>
          Войти
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
