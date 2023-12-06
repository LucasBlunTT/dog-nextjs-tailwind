'use client';

import { useContext, useState } from 'react';
import PhotoCommentsForm from './PhotoCommentsForm';
import { UserContext } from '@/context/UserContext';

export default function PhotoComments(props) {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);

  return (
    <>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  );
}
