import { getStaticImage } from '@/utils';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PasswordInput = ({
  text = '패스워드',
  className,
  onValidationChange,
  onChange,
  password, // 상위 컴포넌트로부터 받은 패스워드 상태
  isConfirm = false, // 패스워드 확인 필드인지 여부
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [inputId] = useState(uuidv4());

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (!isTouched && inputValue) {
      setIsTouched(true);
    }

    const timer = setTimeout(() => {
      if (inputValue) {
        let valid;
        if (isConfirm) {
          // 패스워드 확인 필드의 경우, 상위 컴포넌트의 패스워드와 일치하는지 검사
          valid = inputValue === password;
        } else {
          // 일반 패스워드 필드의 경우, 정규 표현식을 사용한 유효성 검사
          const regex = /^(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{6,16}$/;
          valid = regex.test(inputValue);
        }
        setIsValid(valid);
        onValidationChange(valid, inputValue);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, isTouched, onValidationChange, password, isConfirm]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setIsTouched(true);
    if (typeof onChange === 'function') {
      onChange(e);
    }
  };

  return (
    <div className={`${className}`}>
      <label className="font-bold px-2" htmlFor="passwordInput">
        {text}
      </label>
      <div className="relative w-72">
        <input
          type={showPassword ? 'text' : 'password'}
          id={inputId}
          value={inputValue}
          onChange={handleChange}
          className={`w-full h-11 mt-1 border ${isValid ? 'border-black' : 'border-red-500'} block rounded-2xl px-4 pr-10`} // pr-10을 추가하여 텍스트가 버튼에 가려지지 않도록 함
          placeholder={text === '패스워드' ? '비밀번호를 입력하세요' : '비밀번호를 다시 입력하세요'}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          style={{ top: '50%', transform: 'translateY(-50%)', marginRight: '10px' }} // 버튼을 인풋 필드 내부 오른쪽 끝에 정렬
        >
          {showPassword ? (
            <img src={getStaticImage('icon_eye.svg')} alt="보이기" />
          ) : (
            <img src={getStaticImage('icon_eye_hidden.svg')} alt="숨기기" />
          )}
        </button>
      </div>

      <div className="h-1">
        {isTouched && !isValid && (
          <p className="text-red-500 text-xs px-2">
            {text === '패스워드'
              ? '비밀번호는 특수문자를 포함한 6~16자리여야 합니다.'
              : '비밀번호가 일치하지 않습니다.'}
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
