import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Skeleton from '../Skeleton/Skeleton';

export default function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Skeleton src={photo.src} alt={photo.title} width={575} height={575} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
}
