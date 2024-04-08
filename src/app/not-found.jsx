import Container from '@/components/Container';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="pt-12">
      <Container className={'flex-col items-center justify-center'}>
        <h1>Error: 404</h1>
        <p>Página não encontrada</p>
      </Container>
    </section>
  );
}
