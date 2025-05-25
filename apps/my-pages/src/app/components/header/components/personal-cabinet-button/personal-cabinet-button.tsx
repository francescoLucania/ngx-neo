'use client';

import { useState } from 'react';
import Link from 'next/link';

export function PersonalCabinetButton() {
  const [authState, setAuthState] = useState(false);

  const cabinetButton = () => {
    if (authState) {
      return <Link href="/persona-account">Личный кабинет</Link>;
    } else {
      return <Link href={'login'}>Войти / Зарегистрироваться</Link>;
    }
  };

  const openCabinet = () => {
    setAuthState(true);
  };

  return cabinetButton();
}

export default PersonalCabinetButton;
