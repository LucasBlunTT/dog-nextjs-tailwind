import React, { useContext } from 'react';
import Container from '@/components/Container/index';
import Link from 'next/link';
import Dogs from '../../assets/dogs.svg';
import Image from 'next/image';
import { UserContext } from '@/context/UserContext';

export default function HeaderUser() {
  const { data, userLogout } = useContext(UserContext);

  return (
    <div className="flex w-full z-[100] top-0 bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.1)] py-[1rem] px-0">
      <Container>
        <p>Header Usuário</p>
      </Container>
    </div>
  );
}
