import { useState } from 'react';

function Checkbox({ content = '로그인 상태 유지' }) {
  // 체크박스의 상태를 관리하는 state
  const [isChecked, setIsChecked] = useState(false);

  // 체크박스 상태 변경을 처리하는 함수
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    // 추가적인 작업을 여기서 수행할 수 있습니다. 예: 상태 저장 로직
  };

  return (
    <div className="flex items-center">
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="accent-black h-4 w-4" />
      <span className="ml-2">{content}</span>
    </div>
  );
}

export default Checkbox;
