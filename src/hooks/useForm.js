// import { useState } from 'react';

// export const useForm = (initialState = {}, onSubmit) => {
//   const [values, setValues] = useState(initialState);

//   const handleChange = (evt) => {
//     setValues({ ...values, [evt.target.name]: evt.target.value });
//     console.log(values);
//   };

//   const handleCallback = (evt) => {
//     evt.preventDefault();
//     onSubmit?.(values)
//   }
  

//   return { 
//     values, 
//     setValues, 
//     handleChange, 
//     handleCallback 
//   };
// }

import { useState } from 'react';

export const useForm = (initialState, onSubmit) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit?.(values);
  }
  
  return { values, setValues, handleChange, handleSubmit };
}