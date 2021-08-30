import { useState } from "react";

export const useLink = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};