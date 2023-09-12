import React, { useState } from 'react';

function ButtonHamburguer() {
  const [colorHover, setColorHover] = useState('#000');
  const [activeButton, setActiveButton] = useState(false);

  function handleActive() {
    setActiveButton(!activeButton);
  }

  return (
    <button
      className="bg-[#eee] rounded-[0.2rem] h-10 w-10 flex items-center justify-center border-[1px] border-solid border-transparent cursor-pointer hover:bg-white focus:bg-white hover:shadow-[0_0_0_3px_#eee] hover:border-[#fb1] focus:shadow-[0_0_0_3px_#fb1] focus:border-[#fb1] outline-none"
      onMouseOver={() => setColorHover('#fb1')}
      onMouseOut={() => setColorHover('#000')}
      onClick={handleActive}
    >
      {activeButton ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-more-vertical"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={colorHover}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      )}
    </button>
  );
}

export default ButtonHamburguer;
