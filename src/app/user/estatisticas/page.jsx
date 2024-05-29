'use client';

import React, { useEffect } from 'react';

export default function UserStats() {
  useEffect(() => {
    document.title = 'Estatisticas - Dogs';
  }, []);

  return (
    <>
      <div>Estatisticas</div>
    </>
  );
}
