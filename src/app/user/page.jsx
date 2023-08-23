'use client';

import Feed from '@/components/Feed';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

export default function User() {
  const router = useRouter();
  const { login } = useContext(UserContext);

  if (login === true) {
    return (
      <>
        <div>User</div>
        <Feed />
      </>
    );
  } else if (login === false) {
    router.push('/login');
    return null;
  }
}
