'use client';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import useFetch from '@/Hooks/useFetch';
import { PHOTOS_GET } from '@/api/api';
import React, { useEffect } from 'react';
import FeedPhotosItem from '@/components/Feed/FeedPhotosItem';
import styles from './FeedPhotos.module.css';

export default function FeedPhotos({ page, user, setModalPhoto, setInfinite }) {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <ul className={styles.feed}>
      {data.map((photo) => {
        return (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        );
      })}
    </ul>
  );
}
