import { useLayoutEffect } from 'react';
import useForceUpdate from './useForceUpdate';
import { debounce } from '@/utils';

export default function useResizeUpdateView(timeout = 100) {
  const forceUpdate = useForceUpdate();

  useLayoutEffect(() => {
    const handleResize = debounce(() => {
      forceUpdate();
    }, timeout);

    globalThis.addEventListener('resize', handleResize);

    return () => {
      globalThis.removeEventListener('resize', handleResize);
    };
  }, [timeout, forceUpdate]);
}
