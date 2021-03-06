import { createClient } from "@twitch-player/data";
import Page from "@twitch-player/ui/dist/components/Page";
import Spinner from "@twitch-player/ui/dist/components/Spinner";
import { ThemeProvider } from "@twitch-player/themes/dist/context";
import { light as lightTheme } from "@twitch-player/themes/dist/themes";
import LanguageMonitor from "@twitch-player/ui/dist/components/LanguageMonitor";
import {
  DebugProvider,
  DimensionsProvider,
  OverridesProvider,
} from "@twitch-player/ui/dist/context";
import React, { Suspense, memo } from "react";
import { ApolloProvider } from "react-apollo-hooks";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const apolloClient = createClient();
const overrides = {};

const App = () => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={lightTheme}>
      <DebugProvider>
        <DimensionsProvider>
          <OverridesProvider overrides={overrides}>
            <Router>
              <Suspense fallback={null}>
                <LanguageMonitor />
                <Page>
                  <Suspense fallback={<Spinner />}>
                    <Routes />
                  </Suspense>
                </Page>
              </Suspense>
            </Router>
          </OverridesProvider>
        </DimensionsProvider>
      </DebugProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export default memo(App);
