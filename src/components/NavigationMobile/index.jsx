import Link from 'next/link';
import React, { useState } from 'react';

function NavigationMobile({ mobile, ativo, handleLogout }) {
  const [hoverIconFeed, setHoverIconFeed] = useState('#333');
  const [hoverIconEstatisticas, setHoverIconEstatisticas] = useState('#333');
  const [hoverIconAdicionarFotos, setHoverIconAdicionarFotos] =
    useState('#333');
  const [hoverIconSair, setHoverIconSair] = useState('#333');

  return (
    <nav
      className={`block absolute top-[70px] right-0 p-[0_1rem] bg-white shadow-[0_1px_2px_rgba(0,0,0.2)] rounded-[0.2rem]  transform translate-x-[-10px] z-50 ${
        ativo ? 'opacity-1' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Link
        className={`flex items-center bg-none w-full rounded-none py-2 px-0`}
        href={'/user'}
      >
        <svg
          className="mr-2"
          onMouseOver={() => setHoverIconFeed('#fb1')}
          onMouseOut={() => setHoverIconFeed('#333')}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 4h3a3 3 0 013 3v3a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm0 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H7zM7 15h3a3 3 0 013 3v3a3 3 0 01-3 3H7a3 3 0 01-3-3v-3a3 3 0 013-3zm0 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1H7zM18 4h3a3 3 0 013 3v3a3 3 0 01-3 3h-3a3 3 0 01-3-3V7a3 3 0 013-3zm0 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1h-3zM18 15h3a3 3 0 013 3v3a3 3 0 01-3 3h-3a3 3 0 01-3-3v-3a3 3 0 013-3zm0 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3z"
            fill={hoverIconFeed}
          />
        </svg>

        {mobile && 'Minhas Fotos'}
      </Link>
      <Link
        className={`flex items-center bg-none w-full rounded-none border-b-[1px_solid_#eee] py-2 px-0`}
        href={'/user/estatisticas'}
      >
        <svg
          className="mr-2"
          onMouseOver={() => setHoverIconEstatisticas('#fb1')}
          onMouseOut={() => setHoverIconEstatisticas('#333')}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="6"
            y="14"
            width="2"
            height="8"
            rx="1"
            fill={hoverIconEstatisticas}
          />
          <rect
            x="13"
            y="10"
            width="2"
            height="12"
            rx="1"
            fill={hoverIconEstatisticas}
          />
          <rect
            x="20"
            y="6"
            width="2"
            height="16"
            rx="1"
            fill={hoverIconEstatisticas}
          />
        </svg>

        {mobile && 'Estatisticas'}
      </Link>
      <Link
        className={`flex items-center bg-none w-full rounded-none border-b-[1px_solid_#eee] py-2 px-0`}
        href={'/user/postar'}
      >
        <svg
          className="mr-2"
          onMouseOver={() => setHoverIconAdicionarFotos('#fb1')}
          onMouseOut={() => setHoverIconAdicionarFotos('#333')}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 5a1 1 0 011 1v7h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H6a1 1 0 110-2h7V6a1 1 0 011-1z"
            fill={hoverIconAdicionarFotos}
          />
        </svg>

        {mobile && 'Adicionar Foto'}
      </Link>
      <button
        className="flex items-center bg-none w-full rounded-none border-b-[1px_solid_#eee] py-2 px-0 bg-transparent"
        onClick={handleLogout}
      >
        <svg
          className="mr-2"
          onMouseOver={() => setHoverIconSair('#fb1')}
          onMouseOut={() => setHoverIconSair('#333')}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.2929 9.29289C19.6834 8.90237 20.3166 8.90237 20.7071 9.29289L24.7071 13.2929C25.0976 13.6834 25.0976 14.3166 24.7071 14.7071L20.7071 18.7071C20.3166 19.0976 19.6834 19.0976 19.2929 18.7071C18.9024 18.3166 18.9024 17.6834 19.2929 17.2929L21.5858 15H12C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13H21.5858L19.2929 10.7071C18.9024 10.3166 18.9024 9.68342 19.2929 9.29289Z"
            fill={hoverIconSair}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 6C5 5.44772 5.44772 5 6 5H15C15.5523 5 16 5.44772 16 6V10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10V7H7V21H14V18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18V22C16 22.5523 15.5523 23 15 23H6C5.44772 23 5 22.5523 5 22V6Z"
            fill={hoverIconSair}
          />
        </svg>

        {mobile && 'Sair'}
      </button>
    </nav>
  );
}

export default NavigationMobile;
