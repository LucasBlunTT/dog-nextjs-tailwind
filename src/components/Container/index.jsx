'use client';
import React from 'react';

export default function Container({ children, className }) {
  return (
    <div className={`flex w-full max-w-[800px] px-[15px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
