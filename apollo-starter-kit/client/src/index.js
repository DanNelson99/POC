import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from 'react-router-dom'
import { Provider} from 'react-redux';
import container from './reducers/container';
import {InMemoryCache} from 'apollo-cache-inmemory';
import store from './store';
import AppRoutes from './routes';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http';

// const networkInterface = createNetworkInterface({
//   uri: 'http://localhost:3000/graphql',
//   opts: {
//     credentials: 'same-origin',
//     mode: 'no-cors',
//   },
// });

// const cache = new InMemoryCache({
// });

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
 // link: new HttpLink({ uri: 'http://localhost:3000/graphql' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});



ReactDOM.render((
      <ApolloProvider client={client}>
        <Provider store={store}>         
              <AppRoutes/>        
         </Provider>
         </ApolloProvider>
      ) , document.getElementById("index")
);

