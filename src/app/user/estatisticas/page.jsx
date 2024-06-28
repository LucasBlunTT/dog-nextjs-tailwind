'use client';

import useFetch from '@/Hooks/useFetch';
import { STATS_GET } from '@/api/api';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import React, { useEffect } from 'react';
const UserStatsGraphs = React.lazy(() =>
  import('@/components/UserStatsGraphs'),
);

export default function UserStats() {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    document.title = 'Estatisticas - Dogs';
    async function getData() {
      const { url, options } = STATS_GET();
      const response = await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
}
