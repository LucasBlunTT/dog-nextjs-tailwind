'use client';

import Image from 'next/image';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { UserContext } from '@/context/UserContext';
import Feed from '@/assets/feed.svg';
import ButtonHamburguer from '@/components/ButtonHamburguer';
import Estatisticas from '@/assets/estatisticas.svg';
import AdicionarFoto from '@/assets/adicionar.svg';
import Sair from '@/assets/sair.svg';
import { usePathname, useRouter } from 'next/navigation';
import useMedia from '@/Hooks/useMedia';
import NavigationDesktop from '../NavigationDesktop';
import NavigationMobile from '../NavigationMobile';

export default function HeaderUserNav() {
  const { userLogout } = useContext(UserContext);
  const currentRoute = usePathname();
  const router = useRouter();
  const mobile = useMedia('(max-width: 40rem)');
  const [activeButton, setActiveButton] = useState(false);

  function handleLogout() {
    userLogout();
    router.push('/login');
  }

  function handleActive() {
    setActiveButton(!activeButton);
  }

  return (
    <>
      {mobile && (
        <ButtonHamburguer onClick={handleActive} activeButton={activeButton} />
      )}
      {mobile ? (
        <NavigationMobile
          mobile={mobile}
          rotaAtual={currentRoute}
          handleLogout={handleLogout}
          ativo={activeButton}
        />
      ) : (
        <NavigationDesktop
          rotaAtual={currentRoute}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
}
