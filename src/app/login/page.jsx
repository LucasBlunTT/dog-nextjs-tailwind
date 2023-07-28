'use client';

import useForm from '@/Hooks/useForm';
import Container from '@/components/Container';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import { UserContext } from '@/context/UserContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading, login } = useContext(UserContext);

  if (login) router.push('/conta');

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
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          {error && <p>{error}</p>}
        </form>
        <Link href={'/login/criar'}>Cadastro</Link>
      </Container>
    </section>
  );
}
