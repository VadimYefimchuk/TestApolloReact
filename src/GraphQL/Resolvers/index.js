import gql from 'graphql-tag';
import { CounterMutation, ViewMutation, PostsMutation } from '../Mutations/counterMutation';
import TodoMutations from '../Mutations/todosMutation';

export const typeDefs = gql`
  extend type Query {
    count: Number!,
  }
`;

export const resolvers = {
  Mutation: {
    ...PostsMutation,
    ...ViewMutation,
    ...CounterMutation,
    ...TodoMutations,
  }
}