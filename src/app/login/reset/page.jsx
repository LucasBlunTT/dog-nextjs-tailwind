import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import React, { useState } from 'react';
import useFetch from '@/Hooks/useFetch';
import useForm from '@/Hooks/useForm';
import { PASSWORD_RESET } from '@/api/api';
import Error from '@/components/Error';
import { useRouter } from 'next/navigation';

export default function LoginReset() {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm();
  const [error, loading, request] = useFetch();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        router.push('/login');
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label={'Nova Senha'}
          type={'password'}
          name={'password'}
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
}
