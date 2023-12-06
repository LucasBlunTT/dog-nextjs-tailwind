'use client';

import React, { useState } from 'react';
import Enviar from '@/assets/enviar.svg';
import Image from 'next/image';
import { COMMENT_POST } from '@/api/api';
import useFetch from '@/Hooks/useFetch';
import Error from '@/components/Error';

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
    <form
      className="flex items-center justify-center gap-2 w-full max-w-[319px] h-[50px] mt-4 mb-4"
      onSubmit={handleSubmit}
    >
      <textarea
        className="block w-full border-none text-base resize-none border-[1px_solid_#eee] p-[0.5rem] rounded-[.2rem] bg-[#eee] transition-[.2s] focus:outline-none focus:border-[#fb1] focus:bg-white focus:shadow-[0_0_0_3px_#fea] hover:outline-none hover:border-[#fb1] hover:bg-white hover:shadow-[0_0_0_3px_#fea]"
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <div className="flex flex-col">
        <button className="border-none cursor-pointer text-[#333] bg-transparent text-base overflow-hidden">
          <Image src={Enviar} alt="enviar" />
        </button>
        <Error error={error} />
      </div>
    </form>
  );
}
