'use client';

import useForm from '@/Hooks/useForm';
import Container from '@/components/Container';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import React from 'react';

export const metadata = {
  title: 'Login / Criar',
  description: 'Pagina de Criação de Login',
};

export default function CriarLogin(event) {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  function handleSubmit() {
    event.preventDefault();
  }

  return (
    <section data-aos="fade-right" className="py-4 flex flex-col justify-center items-center">
      <Container className={'flex-col'}>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="Email" type="text" name="email" {...email} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button>Cadastrar</Button>
        </form>
      </Container>
    </section>
  );
}
