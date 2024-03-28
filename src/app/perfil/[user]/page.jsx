import Container from '@/components/Container';
import Feed from '@/components/Feed/Feed';
import React from 'react';

export default function UserProfile({ params }) {
  const { user } = params;
  return (
    <section>
      <Container className={'flex-col items-center'}>
        <h1 className='mt-4'>{user}</h1>
        <Feed user={user} />
      </Container>
    </section>
  );
}
