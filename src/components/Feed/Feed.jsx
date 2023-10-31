'use client';
import React, { useState } from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import Container from '../Container';

export default function Feed() {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <div className="mt-9">
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <Container className={'flex-col'}>
        <FeedPhotos setModalPhoto={setModalPhoto} />
      </Container>
    </div>
  );
}
