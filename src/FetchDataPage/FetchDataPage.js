import React, { useEffect, useRef, useState } from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import { UPDATE_POSTS } from '../GraphQL/Mutations/counterMutation';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_POSTS } from '../GraphQL/Queries/counterQueries';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api'
});

export default function FetchDataPage() {
  const [updateCache, { data }] = useMutation(UPDATE_POSTS);

  const { data: posts, loading } = useQuery(gql`
  query (
    $options: PageQueryOptions
  ) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
  `, {
    client,
    onCompleted: ({ posts }) => {
      console.log(posts.data);
    }
  });

  const [_posts, setPosts] = useState([]);
  const { data: asd } = useQuery(GET_POSTS, {
    onCompleted: (data) => {
      console.log('GET_POSTS', data);
    }
  });

  const [idd, setIdd] = useState(1);

  const setNewPostId = (event) => {
    setIdd(event.target.value);
  }

  return (
    <div>
      <h1>NewPage {JSON.stringify(asd)}</h1>
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

export const Post = ({ postId }) => {
  console.log('event.value', postId);

  const { data, loading } = useQuery(gql`
  query {
    post(id: ${postId}) {
      id
      title
      body
    }
  }
  `, {
    client,
    onCompleted: (data) => {
      console.log('GET_POST', data);
    }
  });

  return (
    <div>
      id: {data?.post?.id}
      title: {data?.post?.title}
    </div>
  )
}