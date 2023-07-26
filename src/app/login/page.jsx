'use client';

import useForm from '@/Hooks/useForm';
import { TOKEN_POST, USER_GET } from '@/api/api';
import Container from '@/components/Container';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Login() {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser();
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handlesubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      console.log(json.token);
      getUser(json.token);
    }
  }

  return (
    <section>
      <Container className="flex-col">
        <h1>Login</h1>
        <form action="" onSubmit={handlesubmit} className="flex flex-col">
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button>Entrar</Button>
        </form>
        <Link href={'/login/criar'}>Cadastro</Link>
      </Container>
    </section>
  );
}
