import useFetch from '@/Hooks/useFetch';
import { PHOTO_DELETE } from '@/api/api';
import React from 'react';

export default function PhotoDelete({ id }) {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <>
      {loading ? (
        <button
          className="bg-gray-300 py-1 px-2 leading-none border rounded cursor-pointer transition-all duration-100 outline-none hover:bg-white focus:bg-white focus:outline-none hover:shadow-md border-gray-300 hover:border-gray-500 focus:border-gray-500"
          disabled
        >
          Deletar
        </button>
      ) : (
        <button
         className="bg-gray-300 py-1 px-2 leading-none border rounded cursor-pointer transition-all duration-100 outline-none hover:bg-white focus:bg-white focus:outline-none hover:shadow-md border-gray-300 hover:border-gray-500 focus:border-gray-500"
          onClick={handleClick}
        >
          Deletar
        </button>
      )}
    </>
  );
}
