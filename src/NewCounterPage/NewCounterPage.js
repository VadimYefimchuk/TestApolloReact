import { useMutation, useQuery } from '@apollo/react-hooks';
import React from 'react';
import { UPDATE_COUNTER } from '../GraphQL/Mutations/counterMutation';
import { GET_COUNTER } from '../GraphQL/Queries/counterQueries';

export default function NewCounterPage() {
  const { data } = useQuery(GET_COUNTER);
  const [increment] = useMutation(UPDATE_COUNTER, { variables: { offset: 1 } })
  const [decrement] = useMutation(UPDATE_COUNTER, { variables: { offset: -1 } })

  return (
    <div>
      <h1>NewCounterPage: {data.counter}</h1>
      <div className="controllers">
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Remove</button>
      </div>
    </div>
  )
}
