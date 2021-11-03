import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { GET_COUNTER, GET_VIEW } from '../GraphQL/Queries/counterQueries';

export default function CouterWithoutButtons() {
  const { data } = useQuery(GET_COUNTER);
  const { data: { view } } = useQuery(GET_VIEW);

  return (
    <div>
      {
        view && <h1>Couter without buttons: {data.counter}</h1>
      }
    </div>
  )
}
