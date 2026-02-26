import './App.css';
import Layout from "./pages/Layout.jsx";
import {BrowserRouter as BRouter} from 'react-router-dom';


import {ApolloProvider} from "@apollo/client/react";
import client from './app/Client.jsx';

function App() {

  return (
    <ApolloProvider client={client}>
        <BRouter>
            <div>
                <Layout />
            </div>
        </BRouter>
    </ApolloProvider>
  )
}

export default App
