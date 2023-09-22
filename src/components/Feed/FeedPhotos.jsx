'use client';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import useFetch from '@/Hooks/useFetch';
import { PHOTOS_GET } from '@/api/api';
import React, { useEffect } from 'react';
import FeedPhotosItem from '@/components/Feed/FeedPhotosItem';

export default function FeedPhotos() {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 0, user: 0 });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <ul className="grid grid-cols-3 gap-4 mb-4 justify-center sm:grid-cols-2">
      {data.map((photo) => {
        return <FeedPhotosItem key={photo.id} photo={photo} />;
      })}
    </ul>
  );
}
