import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	// My WordPress GraphQL endpoint.
	uri: "http://localhost/wordpress/graphql",
	// Apollo Cacheing
	cache: new InMemoryCache(),
});
