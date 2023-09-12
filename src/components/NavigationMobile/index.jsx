import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Estatisticas from '@/assets/estatisticas.svg';
import AdicionarFoto from '@/assets/adicionar.svg';
import Sair from '@/assets/sair.svg';
import Feed from '@/assets/feed.svg';

function NavigationMobile({ mobile, rotaAtual, handleLogout }) {
  return (
    <nav className="grid grid-cols-4 gap-4">
      <Link
        className={`bg-[#eee] rounded-[0.2rem] h-10 w-10 flex items-center justify-center border-[1px] border-solid border-transparent cursor-pointer hover:bg-white focus:bg-white hover:shadow-[0_0_0_3px_#eee] hover:border-[#333] focus:shadow-[0_0_0_3px_#eee] focus:border-[#fb1] outline-none ${
          rotaAtual == '/user'
            ? 'bg-white shadow-[0_0_0_3px_#fea] border-[#fb1]'
            : ''
        } ]`}
        href={'/user'}
      >
        <Image src={Feed} alt="feed" />
        {mobile && 'Minhas Fotos'}
      </Link>
      <Link
        className={`bg-[#eee] rounded-[0.2rem] h-10 w-10 flex items-center justify-center border-[1px] border-solid border-transparent cursor-pointer hover:bg-white focus:bg-white hover:shadow-[0_0_0_3px_#eee] hover:border-[#333] focus:shadow-[0_0_0_3px_#eee] focus:border-[#fb1] outline-none ${
          rotaAtual == '/user/estatisticas'
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
          rotaAtual == '/user/postar'
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

export default NavigationMobile;
