'use client';

import useForm from '@/Hooks/useForm';
import Container from '@/components/Container';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import { UserContext } from '@/context/UserContext';
import Link from 'next/link';
import React, { useContext } from 'react';

export default function Login() {
  const username = useForm();
  const password = useForm();

  const { userLogin, data } = useContext(UserContext);

  async function handlesubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
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
