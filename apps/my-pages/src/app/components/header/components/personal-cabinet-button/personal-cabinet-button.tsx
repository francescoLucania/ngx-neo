'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../../store/features/user/user.store';
import { getUserSelector } from '../../../../store/features/user/user.selectors';

export function PersonalCabinetButton() {
  const user = useSelector(getUserSelector)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUser());
  }, []);

  const cabinetButton = () => {
    if (user) {
      return <Link href="/persona-account">Личный кабинет</Link>;
    } else {
      return <Link href={'login'}>Войти / Зарегистрироваться</Link>;
    }
  };


  return cabinetButton();
}

export default PersonalCabinetButton;
