import styles from './user-information.module.scss';
import { useSelector } from 'react-redux';
import { getUserSelector } from '../../../store/features/user/user.selectors';
import { useEffect } from 'react';

export function UserInformation() {
  const user = useSelector(getUserSelector);

  useEffect(() => {
    console.log('user', user);
    if (!user.accessToken) {
      window.location.href = '/login';
    }
  }, [user]);

  return (
    <div>
      <div>Почта: {user.email}</div>
      <div>ФИО: {user.fullName}</div>
    </div>
  );
}

export default UserInformation;
