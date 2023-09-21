'use client';
import useFetch from '@/Hooks/useFetch';
import useForm from '@/Hooks/useForm';
import { PHOTO_POST } from '@/api/api';
import Error from '@/components/Error';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = useState({});
  const { data, erro, loading, request } = useFetch();
  const navigate = useRouter();

  useEffect(() => {
    if (data) navigate.push('/user');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange(event) {
    setImg({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  }

  return (
    <section className="grid grid-cols-2 gap-8 mb-8">
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <Input
          className="mb-4"
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={erro} />
      </form>
      {img.preview && (
        <div
          className="bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${img.preview})` }}
        ></div>
      )}
    </section>
  );
}
