'use client';

import useFetch from '@/Hooks/useFetch';
import { STATS_GET } from '@/api/api';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import UserStatsGraphs from '@/components/UserStatsGraphs';
import React, { useEffect } from 'react';

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
      <>
        <UserStatsGraphs data={data} />
      </>
    );
  else return null;
}
