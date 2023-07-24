import React from 'react';

export default function Container({ children }) {
  return (
    <div className="flex items-center justify-center w-full max-w-[800px] px-[15px] mx-auto">
      {children}
    </div>
  );
}
