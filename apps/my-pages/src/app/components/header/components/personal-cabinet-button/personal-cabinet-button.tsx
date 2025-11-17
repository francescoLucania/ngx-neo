'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../../store/features/user/user.store';
import { getUserSelector } from '../../../../store/features/user/user.selectors';
import { refreshToken } from '../../../../store/features/user/thunk/refresh-token';

export function PersonalCabinetButton() {
  const user = useSelector(getUserSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());

    if (!user.accessToken) {
      dispatch(refreshToken())
    }

    console.log('user', user)

    if (user) {
      console.log('user', user)
    }


  }, []);

  const cabinetButton = () => {
    if (user.accessToken) {
      return <Link href="/persona-account">Личный кабинет</Link>;
    } else {
      return <Link href={'login'}>Войти / Зарегистрироваться</Link>;
    }
  };

  return cabinetButton();
}

export default PersonalCabinetButton;
