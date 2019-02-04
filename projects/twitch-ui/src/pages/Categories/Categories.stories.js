import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Categories from ".";

storiesOf("Pages|Categories", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <Categories />
  </ApolloProvider>
));
