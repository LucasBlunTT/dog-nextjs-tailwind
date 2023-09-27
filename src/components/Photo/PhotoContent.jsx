import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PhotoComments from '@/components/Photo/PhotoComments';

export default function PhotoContent({ data }) {
  const { photo, comments } = data;
  return (
    <div>
      <div>
        <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
        <div>
          <p>
            <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span>{photo.acessos}</span>
          </p>
          <h1>
            <Link href={`/photo/${photo.id}`}>@{photo.title}</Link>
          </h1>
          <ul>
            <li>{photo.peso} KG</li>
            <li>{photo.idade} ANOS</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
}
