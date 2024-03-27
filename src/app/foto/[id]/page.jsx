'use client';
import useFetch from '@/Hooks/useFetch';
import { PHOTO_GET } from '@/api/api';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import PhotoContentSingle from '@/components/Photo/PhotoContentSingle';
import React, { useEffect } from 'react';

export default function Foto({ params }) {
  const { id } = params;
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section>
        <PhotoContentSingle data={data} />
      </section>
    );
  else return null;
}
