'use client';

import React, { useEffect } from 'react';
import style from './UserStatsGraphs.module.css';
import Container from '../Container';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

export default function UserStatsGraphs({ data }) {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    const graphData = data.map(({ title, acessos }) => {
      return {
        x: title,
        y: acessos,
      };
    });

    setGraph(graphData); // Atualize o estado do graph
    setTotal(data.map(({ acessos }) => acessos).reduce((a, b) => a + b, 0));
  }, [data]);

  return (
    <Container>
      <section className={style.graph}>
        <div className={`${style.total} ${style.graphItem}`}>
          <p>Acessos: {/*total*/70}</p>
        </div>
        <div className={style.graphItem}>
          <VictoryPie
            //data={graph}
            data={[
              { x: 'Cats', y: 35 },
              { x: 'Dogs', y: 40 },
              { x: 'Birds', y: 55 },
            ]}
            innerRadius={50}
            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
            style={{
              data: { fillOpacity: 0.9, stroke: '#fff', strokeWidth: 2 },
              labels: { fontSize: 20, fill: '#333' },
            }}
          />
        </div>
        <div className={style.graphItem}>
          <VictoryChart>
            <VictoryBar
              alignment="start"
              //data={graph}
              data={[
                { x: 'Cats', y: 35 },
                { x: 'Dogs', y: 40 },
                { x: 'Birds', y: 55 },
              ]}
            />
          </VictoryChart>
        </div>
      </section>
    </Container>
  );
}
