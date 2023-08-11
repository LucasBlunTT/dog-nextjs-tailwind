'use client';

import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

export default function Conta() {
  const router = useRouter();
  const { login } = useContext(UserContext);

  if (login === true) {
    return <div>Conta</div>;
  } else if (login === false) {
    router.push('/login');
  }
}
