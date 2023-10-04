'use client';
import useFetch from '@/Hooks/useFetch';
import { PHOTO_GET } from '@/api/api';
import React, { useEffect } from 'react';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import PhotoContent from '@/components/Photo/PhotoContent';

export default function FeedModal({ photo }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, option } = PHOTO_GET(photo.id);
    request(url, option);
  }, [photo, request]);

  return (
    <div className="flex fixed w-screen h-screen bg-black bg-opacity-[0.4] top-0 left-0 z-[1000] p-16 sm:">
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
