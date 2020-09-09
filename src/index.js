import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import "./styles/index.css"
import App from "./components/App"
import * as serviceWorker from "./serviceWorker"

import {AUTH_TOKEN} from "./auth/constant"

// Default Apollo Imports
import {ApolloProvider} from "react-apollo"
import {ApolloClient} from "apollo-client"
import { ApolloLink } from 'apollo-link'
import {InMemoryCache} from "apollo-cache-inmemory"
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'

// Apollo File Upload Link
import {createUploadLink} from "apollo-upload-client"

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		console.log('graphQLErrors', graphQLErrors);
	}
	if (networkError) {
		console.log('networkError', networkError);
	}
});

// GraphQL Backend Connection
const httpLink = createUploadLink({
	uri: "http://localhost:4000/graphql"
})

const authLink = setContext((_, {headers}) => {
	const token = localStorage.getItem(AUTH_TOKEN)
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ""
		}
	}
})

const link = ApolloLink.from([errorLink, authLink.concat(httpLink)])

const client = new ApolloClient({
	link: link,
	cache: new InMemoryCache()
})

ReactDOM.render(
	<Router>
		<ApolloProvider client={client}>
			<App/>
		</ApolloProvider>
	</Router>,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
