import Image from 'next/image';
import React from 'react';
import styles from './FeedPhotosItem.module.css';

export default function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} width={450} height={450} />
      <span>{photo.acessos}</span>
    </li>
  );
}
