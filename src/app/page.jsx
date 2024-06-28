'use client';

import Feed from '@/components/Feed/Feed';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Dogs - Rede Social de Pets';
  }, []);

  return (
    <section className="">
      <Feed />
    </section>
  );
}
