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

export default function LoginLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <UserStorage>
          <Header />
          <section
            data-aos="fade-right"
            className="grid grid-cols-2 min-h-[100vh] gap-8 before:block before:content-[''] before:bg-login before:bg-no-repeat before:bg-cover before:bg-center sm:grid-cols-1 sm:before:hidden"
          >
            {children}
          </section>
        </UserStorage>
      </body>
    </html>
  );
}
