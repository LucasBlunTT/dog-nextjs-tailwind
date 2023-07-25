'use client';

import useForm from '@/Hooks/useForm';
import Container from '@/components/Container';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Login() {
  const username = useForm();
  const password = useForm();

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
