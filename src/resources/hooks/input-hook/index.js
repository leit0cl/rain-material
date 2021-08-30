import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    setea: value => { setValue(value);},
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    },
    bindUpper: {
      value,
      onChange: event => {
        setValue(event.target.value.toUpperCase());
      }
    },
    bindLower: {
      value,
      onChange: event => {
        setValue(event.target.value.toLowerCase());
      }
    },
    bindCode: {
      value,
      onChange: event => {
        setValue(event.target.value.slice(0));
      }
    },
    bindCap: {
      value,
      onChange: event => {
        setValue(Capitalize(event.target.value.toLowerCase()));
      }
    }
  };
};


const Capitalize = function (cadena) {
  return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}