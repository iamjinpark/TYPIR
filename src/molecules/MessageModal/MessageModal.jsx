import React from 'react';
import CommonButton from '@/atoms/CommonButton/CommonButton';
import TextContents from '@/atoms/TextContents/TextContents';

const MessageModal = ({ text, closeModal }) => {
  const textLines = text.split('\n').map((line, index) => (
    <div key={index} className="text-center">
      {line}
    </div>
  ));

  return (
    <div className="max-w-screen-md mx-auto fixed inset-0 bg-black bg-opacity-50 z-20" onClick={closeModal}>
      <div
        className="w-[250px] h-[145px] bg-white border border-black rounded-xl flex flex-col justify-center items-center"
        style={{
          position: 'fixed',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '21',
        }}
      >
        <div className="mb-4">{textLines}</div>
        <div className="flex gap-5">
          <CommonButton text="확인" bgColor="bg-misty" fontColor="text-black" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
