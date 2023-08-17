import React, { useContext } from 'react';
import Container from '@/components/Container/index';
import Link from 'next/link';
import Dogs from '../../assets/dogs.svg';
import Image from 'next/image';
import { UserContext } from '@/context/UserContext';

export default function Header() {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className="flex fixed w-full z-[100] top-0 bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.1)] py-[1rem] px-0">
      <Container>
        <nav className="flex w-full justify-between items-center">
          <Link href={'/'}>
            <Image src={Dogs} alt="imagagem dog" />
          </Link>
          {data ? (
            <div className="flex gap-3">
              <Link
                className='flex items-center gap-2 after:content-[""] after:inline-block after:w-4 after:h-4 after:bg-user after:bg-no-repeat'
                href={'/user'}
              >
                {data.nome}
              </Link>
              <button onClick={userLogout}>sair</button>
            </div>
          ) : (
            <Link
              className='flex items-center gap-2 after:content-[""] after:inline-block after:w-4 after:h-4 after:bg-user after:bg-no-repeat'
              href={'/login'}
            >
              Login / Criar
            </Link>
          )}
        </nav>
      </Container>
    </header>
  );
}
