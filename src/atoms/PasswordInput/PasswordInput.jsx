import { useState, useRef } from 'react';

// 커스텀 훅을 사용하여 비밀번호 유효성 검사 로직 분리
const usePasswordValidation = () => {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const timeoutId = useRef();

  const validatePassword = (inputPassword) => {
    const regex = /^(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{6,16}$/;
    setIsValid(regex.test(inputPassword));
  };

  const handleInputChange = (inputPassword) => {
    setPassword(inputPassword);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => validatePassword(inputPassword), 300);
  };

  return { password, isValid, handleInputChange };
};

const PasswordInput = () => {
  const { password, isValid, handleInputChange } = usePasswordValidation();

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="passwordInput" className="font-bold px-2">
        Password
      </label>
      <input
        type="password"
        id="passwordInput"
        value={password}
        onChange={(e) => handleInputChange(e.target.value)}
        className={`w-72 h-11 mt-1 border ${isValid ? 'border-gray-300' : 'border-red-500'} block rounded-2xl px-4`}
        placeholder="비밀번호를 입력하세요"
      />
      {!isValid && <p className="text-red-500 text-sm mt-1 px-2">비밀번호는 특수문자를 포함한 6~16자리여야 합니다.</p>}
    </div>
  );
};

export default PasswordInput;
