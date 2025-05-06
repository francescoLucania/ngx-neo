'use client';

import { useState } from 'react';

export function PersonalCabinetButton() {
  const [authState, setAuthState] = useState(false);

  const cabinetButton = () => {
    if (authState) {
      return <a href="/persona-account">Личный кабинет</a>;
    } else {
      return <button onClick={() => openCabinet()}>Войти</button>;
    }
  };

  const openCabinet = () => {
    setAuthState(true);
  };

  return cabinetButton();
}

export default PersonalCabinetButton;
