'use client';

import useForm from '@/Hooks/useForm';
import { USER_POST } from '@/api/api';
import Container from '@/components/Container';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import { UserContext } from '@/context/UserContext';
import React, { useContext } from 'react';

export default function CriarLogin() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section
      data-aos="fade-right"
      className="py-4 flex flex-col justify-center items-center"
    >
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
