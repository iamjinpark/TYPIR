import { useState, useRef } from 'react';

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

const PasswordInput = ({ text = '패스워드', className }) => {
  const { password, isValid, handleInputChange } = usePasswordValidation();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor="passwordInput" className="font-bold px-2">
        {text}
      </label>
      <div className="relative w-72">
        <input
          type={showPassword ? 'text' : 'password'}
          id="passwordInput"
          value={password}
          onChange={(e) => handleInputChange(e.target.value)}
          className={`w-full h-11 mt-1 border ${isValid ? 'border-black' : 'border-red-500'} rounded-2xl px-4 pr-10 relative`}
          placeholder="비밀번호를 입력하세요"
        />
        <button
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          style={{ top: '50%', transform: 'translateY(-50%)', marginRight: '10px' }} // 버튼을 인풋 필드 내부 오른쪽 끝에 정렬
        >
          {showPassword ? (
            <img src="/public/images/icon_eye.svg" alt="보이기" />
          ) : (
            <img src="/public/images/icon_eye_hidden.svg" alt="숨기기" />
          )}
        </button>
      </div>
      {!isValid && <p className="text-red-500 text-sm mt-1 px-2">비밀번호는 특수문자를 포함한 6~16자리여야 합니다.</p>}
    </div>
  );
};

export default PasswordInput;
