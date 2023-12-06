'use client';

import React, { useState } from 'react';
import Enviar from '@/assets/enviar.svg';
import Image from 'next/image';
import { COMMENT_POST } from '@/api/api';
import useFetch from '@/Hooks/useFetch';
import Error from '../Error';

export default function PhotoCommentsForm({ id, setComments }) {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />

      <button>
        <Image src={Enviar} alt="enviar" />
      </button>
      <Error error={error} />
    </form>
  );
}
