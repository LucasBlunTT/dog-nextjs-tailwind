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
    <div>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
