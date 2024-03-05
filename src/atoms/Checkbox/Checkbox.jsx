import { useState } from 'react';

// function Checkbox({ text = '로그인 상태 유지', className }) {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = (event) => {
//     setIsChecked(event.target.checked);
//   };

//   const checkboxId = `checkbox-${text.replace(/\s+/g, '-').toLowerCase()}`;

//   return (
//     <div className={`flex items-center px-2 ${className}`}>
//       <input
//         type="checkbox"
//         id={checkboxId}
//         checked={isChecked}
//         onChange={handleCheckboxChange}
//         className="accent-black h-4 w-4"
//       />
//       <label htmlFor={checkboxId} className="ml-2 cursor-pointer">
//         {text}
//       </label>
//     </div>
//   );
// }

function Checkbox({ text = '로그인 상태 유지', className, checked, onChange }) {
  // 내부 상태 관리는 제거하고, checked와 onChange를 props로 받음
  const checkboxId = `checkbox-${text.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`flex items-center px-2 ${className}`}>
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked} // 외부에서 제공된 checked 상태 사용
        onChange={onChange} // 외부에서 제공된 onChange 핸들러 사용
        className="accent-black h-4 w-4"
      />
      <label htmlFor={checkboxId} className="ml-2 cursor-pointer">
        {text}
      </label>
    </div>
  );
}

export default Checkbox;
