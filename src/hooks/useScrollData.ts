import { useCallback, useEffect, useState } from 'react';

export default function useScrollData(scrollY: number = 200) {
  const [biggerThanScrollY, setBiggerThanScrollY] = useState(false);

  const onScrollHandler = useCallback(() => {
    if (window.scrollY > scrollY && !biggerThanScrollY)
      setBiggerThanScrollY(true);
    else if (window.scrollY <= scrollY && biggerThanScrollY)
      setBiggerThanScrollY(false);
  }, [biggerThanScrollY, scrollY]);

  useEffect(() => {
    document.addEventListener('scroll', onScrollHandler);
    return () => document.removeEventListener('scroll', onScrollHandler);
  }, [onScrollHandler]);

  return [biggerThanScrollY];
}
