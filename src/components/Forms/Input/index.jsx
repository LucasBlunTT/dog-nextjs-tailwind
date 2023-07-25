import React from 'react';

export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  ...props
}) {
  return (
    <div className="mb-4">
      <label className="block text-[1rem] leading-4 pb-[0.5rem]" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded-[1px] border-2 border-solid border-[#eee] block w-full text-[1rem] p-[0.8rem] bg-[#eee] transition duration-150 ease-in-out"
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {error && <p className="text-[red] text-[0.875rem] mt-1">{error}</p>}
    </div>
  );
}
