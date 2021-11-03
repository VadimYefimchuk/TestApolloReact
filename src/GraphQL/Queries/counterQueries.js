import gql from 'graphql-tag';

export const GET_COUNTER = gql`
 query GetCounterValue {
    counter @client
 }
`;

export const GET_VIEW = gql`
 query GetViewValue {
    view @client
 }
`;

export const GET_POSTS = gql`
 query GetPostsValue {
    posts @client
 }
`;