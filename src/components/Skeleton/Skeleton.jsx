import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Skeleton.module.css';
export default function Skeleton({ alt, ...props }) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <Image
        onLoad={handleLoad}
        className={styles.img}
        src={''}
        alt={alt}
        {...props}
      />
    </div>
  );
}
