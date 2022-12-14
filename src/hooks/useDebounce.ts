import { useRef, useEffect } from "react";

export default function useDebouncedFunction(func: (...args: any) => void, delay: number, cleanUp = false) {
  const timeoutRef = useRef<any>();

  // Очистка таймера
  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }

  // Очищаем таймер при анмаунте компонента, если cleanUp выставлен в true
  // и тем самым отменяем последний запланированный вызов
  useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

  return (...args: Array<unknown>) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => func(...args), delay);
  };
}