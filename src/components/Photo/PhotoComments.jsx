'use client';

import { useContext, useState } from 'react';
import PhotoCommentsForm from './PhotoCommentsForm';
import { UserContext } from '@/context/UserContext';

export default function PhotoComments(props) {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);

  return (
    <>
      <ul className='overflow-y-auto break-words'>
        {comments.map((comment) => (
          <li className='mb-2' key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  );
}
