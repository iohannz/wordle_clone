import { useEffect } from 'react';

export default function useKey(callback: Function) {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true);
    return () => document.removeEventListener('keydown', handleKeyDown, true);
  }, []);

  const regExpForKeyboard = /ENTER|DELETE|BACKSPACE|\b([a-zA-z])\b/;
  const handleKeyDown = (e: any) => {
    e.key.toUpperCase().match(regExpForKeyboard) ? callback(e.key.toUpperCase()) : '';
  };
}
