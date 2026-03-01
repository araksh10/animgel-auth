import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:3000/graphql',
    }),
        cache: new InMemoryCache(),
        credentials: "include",
});

export default client;