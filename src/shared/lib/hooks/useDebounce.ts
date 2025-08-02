import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export const useDebounce = <T>(
  initialValue: T,
  callback: (value: T) => void,
  delay = 500,
  options = { maxWait: 2000 }
) => {
  const [value, setValue] = useState(initialValue);

  const debouncedCallback = useDebouncedCallback(callback, delay, options);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    return () => debouncedCallback.cancel();
  }, [debouncedCallback]);

  return [value, setValue, debouncedCallback] as const;
};
