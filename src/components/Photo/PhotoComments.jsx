'use client';

import { useContext } from 'react';
import PhotoCommentsForm from './PhotoCommentsForm';
import { UserContext } from '@/context/UserContext';

export default function PhotoComments() {
  const { login } = useContext(UserContext);

  return <div>{login && <PhotoCommentsForm />}</div>;
}
