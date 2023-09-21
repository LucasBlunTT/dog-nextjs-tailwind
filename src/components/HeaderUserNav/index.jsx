'use client';

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context/UserContext';
import ButtonHamburguer from '@/components/ButtonHamburguer';
import { usePathname, useRouter } from 'next/navigation';
import useMedia from '@/Hooks/useMedia';
import NavigationDesktop from '../NavigationDesktop';
import NavigationMobile from '../NavigationMobile';

export default function HeaderUserNav() {
  const { userLogout } = useContext(UserContext);
  const currentRoute = usePathname();
  const router = useRouter();
  const mobile = useMedia('(max-width: 40rem)');
  const [activeButton, setActiveButton] = useState(true);

  function handleLogout() {
    userLogout();
    router.push('/login');
  }

  function handleActive() {
    setActiveButton(!activeButton);
  }

  useEffect(() => {
    setActiveButton((active) => !active);
  }, [currentRoute]);

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
