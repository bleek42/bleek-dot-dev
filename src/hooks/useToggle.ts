import { type Dispatch, type SetStateAction, useCallback, useState } from 'react';

export default function useToggle(defaultToggle?: boolean) {
  const [toggle, setToggle] = useState(!!defaultToggle);

  const handleToggle = useCallback(
    (evt: React.MouseEvent<HTMLElement>) => {
      // evt.preventDefault();
      console.log({ 'handleToggle': evt });
      setToggle((prev) => !prev);
    },
    [toggle],
  );

  return { toggle, handleToggle, setToggle };
}
