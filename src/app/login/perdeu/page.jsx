'use client';

import useFetch from '@/Hooks/useFetch';
import useForm from '@/Hooks/useForm';
import { PASSWORD_LOST } from '@/api/api';
import Container from '@/components/Container';
import Error from '@/components/Error';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import React, { useEffect } from 'react';

export default function PerdeuLogin() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    document.title = 'Perdeu a Senha - Dogs';
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: 'http://localhost:3000/login/perdeu',
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <section>
      <Container className={'flex-col'}>
        <h1>Perdeu a Senha ?</h1>
        {data ? (
          <p style={{ color: '#4c1' }}>{data}</p>
        ) : (
          <p>
            Informe o seu email ou usuário que enviaremos um link para
            recuperação de senha.
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <Input
            label={'Email / Usuário'}
            type={'text'}
            name={'login'}
            {...login}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
        <Error error={error} />
      </Container>
    </section>
  );
}
