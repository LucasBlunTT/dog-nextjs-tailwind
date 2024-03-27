'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import Olho from '../../assets/visualizacao-black.svg';
import PhotoComments from '@/components/Photo/PhotoComments';
import { UserContext } from '@/context/UserContext';
import PhotoDelete from './PhotoDelete';
import Skeleton from '../Skeleton/Skeleton';
import Container from '../Container';

export default function PhotoContent({ data }) {
  const user = useContext(UserContext);
  const { photo, comments } = data;
  return (
    <Container>
      <div className="flex-col w-full max-w-[894px] h-[575px] mt-8">
        <div className="w-full max-w-[575px] h-[575px] overflow-hidden">
          <Skeleton
            src={photo.src}
            alt={photo.title}
            width={575}
            height={575}
            className="object-cover"
          />
        </div>
        <div className="w-full max-w-[319px] h-full pt-8 pr-8 pb-0 pl-8 bg-white overflow-y-auto">
          <div>
            <p className="opacity-50 mb-4 flex justify-between items-center hover:underline">
              {user.data && user.data.username === photo.author ? (
                <PhotoDelete id={photo.id} />
              ) : (
                <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
              )}
              <span className="flex items-center">
                <Image src={Olho} alt="olho visualziação" className="mr-2" />
                {photo.acessos}
              </span>
            </p>
            <h1>
              <Link href={`/foto/${photo.id}`}>@{photo.title}</Link>
            </h1>
            <ul className="flex text-lg font-bold mt-4 mb-8">
              <li className="mr-8">{photo.peso} KG</li>
              <li>{photo.idade} ANOS</li>
            </ul>

            <PhotoComments id={photo.id} comments={comments} />
          </div>
        </div>
      </div>
    </Container>
  );
}
