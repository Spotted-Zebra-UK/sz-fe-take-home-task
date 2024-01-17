import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { FC } from "react";
import SoftSkills from "./views/SoftSkills";

const client = new ApolloClient({
  uri: "http://localhost:4000/", // TODO: move to a config
  cache: new InMemoryCache(),
});

const App: FC = () => (
  <ApolloProvider client={client}>
    <SoftSkills />
  </ApolloProvider>
);

export default App;
