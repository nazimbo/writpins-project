import { useState } from "react";

function useStoredState(key, defaultValue) {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  const setStoredState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, setStoredState];
}

export default useStoredState;
