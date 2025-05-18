import styles from './input.module.scss';
import React, { FC, useEffect, useRef } from 'react';

type InputProps = {
  autofocus?: boolean,
  value: string;
  inputChange: (value: string) => void;
}

export const Input: FC<InputProps> = function({ autofocus = false, value, inputChange })  {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (autofocus && inputRef.current) {
        const textInput = inputRef.current;
        const len = value.length;

        textInput.setSelectionRange(len, len);
        textInput.focus();
      }
    })
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => inputChange(e.target?.value); // Parameter 'e' implicitly has an 'any' type.

  return (
    <div className={styles['neo-ui-input']}>
      <input
        className={styles['neo-ui-input__tag']}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
}

export default Input;
