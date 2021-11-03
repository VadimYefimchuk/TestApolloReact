import { useMutation, useQuery } from '@apollo/react-hooks';
import React, {useState} from 'react';
import { UPDATE_COUNTER } from '../GraphQL/Mutations/counterMutation';
import { GET_COUNTER } from '../GraphQL/Queries/counterQueries';
import { Post } from '../FetchDataPage/FetchDataPage';

export default function NewCounterPage() {
  const { data } = useQuery(GET_COUNTER);
  const [increment] = useMutation(UPDATE_COUNTER, { variables: { offset: 1 } })
  const [decrement] = useMutation(UPDATE_COUNTER, { variables: { offset: -1 } })

  const [idd, setIdd] = useState(1);

  const setNewPostId = (event) => {
    setIdd(event.target.value);
  }

  return (
    <div>
      <h1>NewCounterPage: {data.counter}</h1>
      <div className="controllers">
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Remove</button>
      </div>

      <select name="postId"
              id="postId"
              onChange={setNewPostId}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <Post postId={idd}/>
    </div>
  )
}
