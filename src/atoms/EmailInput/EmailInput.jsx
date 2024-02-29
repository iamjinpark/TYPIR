import { useState, useRef } from 'react';

// 커스텀 훅을 사용하여 이메일 유효성 검사 로직 분리
const useEmailValidation = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const timeoutId = useRef();

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(inputEmail));
  };

  const handleInputChange = (inputEmail) => {
    setEmail(inputEmail);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => validateEmail(inputEmail), 300);
  };

  return { email, isValid, handleInputChange };
};

const EmailInput = ({ className }) => {
  const { email, isValid, handleInputChange } = useEmailValidation();

  return (
    <div className={`${className}`}>
      <label className="font-bold	px-2" htmlFor="emailInput">
        이메일
      </label>
      <input
        type="text"
        id="emailInput"
        value={email}
        placeholder="email@email.com"
        onChange={(e) => handleInputChange(e.target.value)}
        className={`w-72 h-11 mt-1 border border-black block rounded-2xl px-4`}
      />
      {!isValid && <p className="text-red-500 px-2  ">유효한 이메일 형식이 아닙니다.</p>}
    </div>
  );
};

export default EmailInput;
