import React, { useState } from 'react';

export default function useForm() {
  const [value, setValue] = useState('');

  function onChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    setValue,
    onChange,
  };
}
