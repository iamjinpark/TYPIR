import { useState } from 'react';

function Checkbox({ content = '로그인 상태 유지', className }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={`flex items-center ${className}`}>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="accent-black h-4 w-4" />
      <span className="ml-2">{content}</span>
    </div>
  );
}

export default Checkbox;
