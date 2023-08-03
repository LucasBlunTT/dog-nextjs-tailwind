import React from 'react';

export default function Error({ error }) {
  if (!error) return null;
  return <p className="text-[#f31] my-4 mx-0">{error}</p>;
}
