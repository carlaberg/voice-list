import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { PageTransition } from 'next-page-transitions';
import withApolloClient from '../lib/with-apollo-client';
import Header from '../components/Header';

class MyApp extends App {

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <div>
            <Header />
            <PageTransition timeout={300} classNames="page-transition">
              <Component {...pageProps} />
            </PageTransition>
          </div>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
