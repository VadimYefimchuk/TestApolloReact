import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import styles from './styles.css'
import { GET_COUNTER, GET_VIEW } from '../GraphQL/Queries/counterQueries';
import { UPDATE_COUNTER, CHANGE_VIEW } from '../GraphQL/Mutations/counterMutation';

export default function Couter() {
  const { data: { counter } } = useQuery(GET_COUNTER);
  const { data: { view } } = useQuery(GET_VIEW);
  const [increment] = useMutation(UPDATE_COUNTER, { variables: { offset: 1 } })
  const [decrement] = useMutation(UPDATE_COUNTER, { variables: { offset: -1 } })
  const [changeView] = useMutation(CHANGE_VIEW, { variables: { offset: false } })

  console.log("view", view);
  return (
    <div>
      <h1>Couter: {counter}</h1>
      <h1>View: <pre>{view.toString()}</pre></h1>
      <div className="controllers">
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Remove</button>
        <input type="checkbox" onChange={changeView}></input>
      </div>
    </div>
  )
}
