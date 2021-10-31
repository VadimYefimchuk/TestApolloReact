import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { GET_COUNTER } from '../GraphQL/Queries/counterQueries';

export default function CouterWithoutButtons() {
  const { data } = useQuery(GET_COUNTER);

  return (
    <div>
      <h1>Couter without buttons: {data.counter}</h1>
    </div>
  )
}
