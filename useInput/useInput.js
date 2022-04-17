import { useState } from "react";


const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {
        target: { value }
      } = event;
      // const value = event.target.value;
  
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
  
    return { value, onChange };
    // return { value: value, onChange: onchange };
  };
  
  export default useInput;