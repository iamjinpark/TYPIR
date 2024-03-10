import { useState } from 'react';

export default function useForceUpdate() {
  const [, update] = useState(0);
  return () => update((c) => c + 1);
}
