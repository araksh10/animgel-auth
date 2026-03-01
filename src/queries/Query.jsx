import { gql } from '@apollo/client';

export const USER_ADD = gql`
    mutation UserAdd(
        $name: String!,
        $username: String!,
        $email: String!,
        $password: String!
    ) {
        userAdd(
            name: $name,
            username: $username,
            email: $email,
            password: $password
        ) {
            id
            name
            email
        }
    }
`;

export const USER_LOGIN = gql`
    mutation userLogIn($email: String!, $password: String!) {
        userLogIn(email: $email, password: $password) {
            success
            message
            id
            name
            username
            email
        }
    }
`;
