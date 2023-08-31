'use client';

import React, { useContext, useEffect, useState } from 'react';
import Container from '@/components/Container/index';
import HeaderUserNav from '../HeaderUserNav';
import { usePathname } from 'next/navigation';

export default function HeaderUser() {
  const [title, setTitle] = useState('');

  const currentRoute = usePathname();

  useEffect(() => {
    currentRoute === '/user'
      ? setTitle('Minha Conta')
      : currentRoute === '/user/estatisticas'
      ? setTitle('Estatísticas')
      : currentRoute === '/user/postar'
      ? setTitle('Poste Sua Foto')
      : '';
  }, [currentRoute]);

  return (
    <header className="mt-8">
      <Container className="flex-col">
        <div className="grid grid-cols-[1fr,auto] items-center mb-8 relative">
          <h1>{title}</h1>
          <HeaderUserNav />
        </div>
      </Container>
    </header>
  );
}
