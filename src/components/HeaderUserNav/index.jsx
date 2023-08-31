'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { UserContext } from '@/context/UserContext';
import Feed from '@/assets/feed.svg';
import Estatisticas from '@/assets/estatisticas.svg';
import AdicionarFoto from '@/assets/adicionar.svg';
import Sair from '@/assets/sair.svg';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function HeaderUserNav() {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  const currentRoute = usePathname();
  const router = useRouter();

  function handleLogout() {
    userLogout();
    router.push('/login');
  }

  return (
    <nav className="grid grid-cols-4 gap-4">
      <Link
        className={`bg-[#eee] rounded-[0.2rem] h-10 w-10 flex items-center justify-center border-[1px] border-solid border-transparent cursor-pointer hover:bg-white focus:bg-white hover:shadow-[0_0_0_3px_#eee] hover:border-[#333] focus:shadow-[0_0_0_3px_#eee] focus:border-[#fb1] outline-none ${
          currentRoute == '/user'
            ? 'bg-white shadow-[0_0_0_3px_#fea] border-[#fb1]'
            : ''
        }`}
        href={'/user'}
      >
        <Image src={Feed} alt="feed" />
        {mobile && 'Minhas Fotos'}
      </Link>
      <Link
        className={`bg-[#eee] rounded-[0.2rem] h-10 w-10 flex items-center justify-center border-[1px] border-solid border-transparent cursor-pointer hover:bg-white focus:bg-white hover:shadow-[0_0_0_3px_#eee] hover:border-[#333] focus:shadow-[0_0_0_3px_#eee] focus:border-[#fb1] outline-none ${
          currentRoute == '/user/estatisticas'
            ? 'bg-white shadow-[0_0_0_3px_#fea] border-[#fb1]'
            : ''
        }`}
        href={'/user/estatisticas'}
      >
        <Image src={Estatisticas} alt="estatisticas" />
        {mobile && 'Estatisticas'}
      </Link>
      <Link
        className={`bg-[#eee] rounded-[0.2rem] h-10 w-10 flex items-center justify-center border-[1px] border-solid border-transparent cursor-pointer hover:bg-white focus:bg-white hover:shadow-[0_0_0_3px_#eee] hover:border-[#333] focus:shadow-[0_0_0_3px_#eee] focus:border-[#fb1] outline-none ${
          currentRoute == '/user/postar'
            ? 'bg-white shadow-[0_0_0_3px_#fea] border-[#fb1]'
            : ''
        }`}
        href={'/user/postar'}
      >
        <Image src={AdicionarFoto} alt="adicionar fotos" />
        {mobile && 'Adicionar Foto'}
      </Link>
      <button
        className="bg-[#eee] rounded-[0.2rem] h-10 w-10 flex items-center justify-center border-[1px] border-solid border-transparent cursor-pointer hover:bg-white focus:bg-white hover:shadow-[0_0_0_3px_#eee] hover:border-[#333] focus:shadow-[0_0_0_3px_#eee] focus:border-[#fb1] outline-none"
        onClick={handleLogout}
      >
        <Image src={Sair} alt="sair" />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
}
