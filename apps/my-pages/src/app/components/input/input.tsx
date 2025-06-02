import styles from './input.module.scss';
import React, { FC, useEffect, useRef } from 'react';

type InputProps = {
  invalid?: boolean;
  autofocus?: boolean;
  value: string;
  type: string;
  inputChange: (value: string) => void;
};

export const Input: FC<InputProps> = function ({
  autofocus = false,
  invalid = false,
  type = 'text',
  value,
  inputChange,
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus && inputRef.current) {
      const textInput = inputRef.current;
      const len = value.length;

      textInput.setSelectionRange(len, len);
      textInput.focus();
    }
  }, [inputRef]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    inputChange(e.target?.value);

  return (
    <div
      className={
        styles['neo-ui-input'] +
        ' ' +
        (invalid ? styles['neo-ui-input--invalid'] : '')
      }
    >
      <input
        className={styles['neo-ui-input__tag']}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
