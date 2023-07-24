import React from 'react';
import Container from '../Container';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Container>
        <nav>
          <Link href={'/'}>Home</Link>
          <Link href={'/login'}>Login</Link>
        </nav>
      </Container>
    </header>
  );
}
