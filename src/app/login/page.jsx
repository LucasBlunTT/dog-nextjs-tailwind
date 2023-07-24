'use client';

import Input from '@/components/Forms/Input';
import Link from 'next/link';
import React, { useState } from 'react';

export const metadata = {
  title: 'Login',
  description: 'Pagina de Login',
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handlesubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <section className="flex flex-col">
      <h1>Login</h1>
      <form action="" onSubmit={handlesubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <button className="block">Entrar</button>
      </form>
      <Link href={'/login/criar'}>Cadastro</Link>
    </section>
  );
}
