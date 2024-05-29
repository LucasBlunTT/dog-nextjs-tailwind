'use client';

import Feed from '@/components/Feed/Feed';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

export default function User() {
  const router = useRouter();
  const { login, data } = useContext(UserContext);

  useEffect(() => {
    document.title = 'Feed - Dogs';
  }, []);

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
