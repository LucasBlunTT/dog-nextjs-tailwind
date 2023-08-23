'use client';

import React, { useContext } from 'react';
import Container from '@/components/Container/index';
import HeaderUserNav from '../HeaderUserNav';

export default function HeaderUser() {
  return (
    <header>
      <Container className="flex-col">
        <h1>Titulo</h1>
        <HeaderUserNav />
      </Container>
    </header>
  );
}
