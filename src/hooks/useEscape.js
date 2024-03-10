import { useEffect } from 'react';

function useEscape(onEscape) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onEscape();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onEscape]);
}

export default useEscape;
