import { GET_COUNTER, GET_VIEW } from '../Queries/counterQueries';
import gql from 'graphql-tag';

export const UPDATE_COUNTER = gql`
  mutation updateCounter($offset: Number!) {
    updateCounter(offset: $offset) @client
  }
`;

export const CounterMutation = {
  updateCounter: (_, variables, { cache }) => {
    const data = cache.readQuery({ query: GET_COUNTER });
    cache.writeData({ data: { counter: data.counter + variables.offset } });
    return null;
  },
};

export const UPDATE_POSTS = gql`
  mutation updatePosts($offset: Posts!) {
    updatePosts(offset: $offset) @client
  }
`;

export const PostsMutation = {
  updatePosts: (_, variables, { cache }) => {
    cache.writeData({ data: { posts: variables.offset } });
    return null;
  },
};

export const CHANGE_VIEW = gql`
  mutation changeView($offset: View!) {
    changeView(offset: $offset) @client
  }
`;

export const ViewMutation = {
  changeView: (_, variables, { cache }) => {
    const data = cache.readQuery({ query: GET_VIEW });
    cache.writeData({ data: { view: !data.view } });
    return null;
  },
};