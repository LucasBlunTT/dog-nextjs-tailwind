'use client';

import Feed from '@/components/Feed/Feed';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

export default function User() {
  const router = useRouter();
  const { login, data } = useContext(UserContext);

  if (login === true) {
    return (
      <>
        <Feed user={data.id} />
      </>
    );
  } else if (login === false) {
    router.push('/login');
    return null;
  }
}
