const LoadingSpinner = () => {
  // CSS를 이용한 스피너 스타일
  const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderTop: '4px solid #D30001',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 4s linear infinite',
  };

  // @keyframes 애니메이션 정의
  const globalStyle = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

  return (
    <>
      <style>{globalStyle}</style>
      <div style={spinnerStyle}></div>
    </>
  );
};

export default LoadingSpinner;
