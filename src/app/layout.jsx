'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import '@/app/globals.css';
import { Poppins } from 'next/font/google';
import { UserStorage } from '@/context/UserContext';
import { useEffect } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-popins',
  weight: ['400', '700'],
});

export default function FotoLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <UserStorage>
          <Header />
          {children}
        </UserStorage>
      </body>
    </html>
  );
}
