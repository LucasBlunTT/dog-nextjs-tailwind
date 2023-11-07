'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Olho from '../../assets/visualizacao-black.svg';
import PhotoComments from '@/components/Photo/PhotoComments';

export default function PhotoContent({ data }) {
  const { photo, comments } = data;
  return (
    <div className="flex w-full max-w-[894px] h-[575px]">
      <div className="w-full max-w-[575px] h-[575px] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.title}
          width={575}
          height={575}
          className="object-cover"
        />
      </div>
      <div className="w-full max-w-[319px] h-full pt-8 pr-8 pb-0 pl-8 bg-white">
        <div>
          <p className="opacity-50 mb-4 flex justify-between items-center hover:underline">
            <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className="flex items-center">
              <Image src={Olho} alt="olho visualziação" className="mr-2" />
              {photo.acessos}
            </span>
          </p>
          <h1>
            <Link href={`/photo/${photo.id}`}>@{photo.title}</Link>
          </h1>
          <ul className="flex text-lg font-bold mt-4 mb-8">
            <li className="mr-8">{photo.peso} KG</li>
            <li>{photo.idade} ANOS</li>
          </ul>

          <PhotoComments id={photo.id} comments={comments} />
        </div>
      </div>
    </div>
  );
}
