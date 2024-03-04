import { useState, useEffect } from 'react';

const EmailInput = ({ className, onValidationChange }) => {
  const [email, setEmail] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (!isTouched && email) {
      setIsTouched(true);
    }

    const timer = setTimeout(() => {
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valid = emailRegex.test(email);
        setIsValid(valid);
        onValidationChange(valid, email);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [email, isTouched, onValidationChange]);

  return (
    <div className={`${className} relative`}>
      <label className="font-bold px-2" htmlFor="emailInput">
        이메일
      </label>
      <input
        type="text"
        id="emailInput"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`w-72 h-11 mt-1 border ${isValid ? 'border-black' : 'border-red-500'} block rounded-2xl px-4`}
        placeholder="email@example.com"
      />
      <div className="h-1">
        {isTouched && !isValid && <p className="text-red-500 text-xs px-2">유효한 이메일 형식이 아닙니다.</p>}
      </div>
    </div>
  );
};

export default EmailInput;
