'use client';

import useForm from '@/Hooks/useForm';
import Container from '@/components/Container';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import { UserContext } from '@/context/UserContext';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Error from '@/components/Error';

export default function Login() {
  const router = useRouter();
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading, login } = useContext(UserContext);

  if (login) router.push('/user');

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section data-aos="fade-right">
      <Container className="flex-col">
        <div className="flex items-center justify-center flex-col h-[60%]">
          <h1 className="text-[3.1rem]">Login</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mb-8 max-w-[30rem] p-4 sm:w-full"
          >
            <Input label="Usuário" type="text" name="username" {...username} />
            <Input
              label="Senha"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button>Entrar</Button>
            )}
            {error && <Error error={error} />}
          </form>

          <Link
            href={'/login/perdeu'}
            className="inline-block text-[#666] py-[0.5rem] px-[0] leading-4"
          >
            Perdeu a Senha?
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center mt-16">
          <h2>Cadastre-se</h2>
          <p className="my-8">
            Ainda não possui uma conta? Cadastre-se no site.
          </p>
          <Link
            href={'/login/criar'}
            className="flex items-center justify-center text-base rounded-[0.4rem] bg-[#fb1] text-[#764701] py-[0.8rem] px-[1.2rem] hover:shadow-[0_0_0_3px_#fea] transition duration-300 ease-in-out min-w-[8rem]"
          >
            Cadastro
          </Link>
        </div>
      </Container>
    </section>
  );
}
