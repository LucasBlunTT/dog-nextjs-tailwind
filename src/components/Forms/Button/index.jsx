import React from 'react';

export default function Button({ children, ...props }) {
  return (
    <button
      className="text-base rounded-[0.4rem] bg-[#fb1] text-[#764701] py-[0.8rem] px-[1.2rem] hover:shadow-[0_0_0_3px_#fea] transition duration-300 ease-in-out min-w-[8rem]"
      {...props}
    >
      {children}
    </button>
  );
}
