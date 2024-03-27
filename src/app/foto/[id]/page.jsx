'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Foto({ params }) {
  const { id } = params;
  console.log(id);
  return <div>{id}</div>;
}
