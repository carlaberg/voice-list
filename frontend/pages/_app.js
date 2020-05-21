import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { PageTransition } from 'next-page-transitions'
import withApolloClient from '../lib/with-apollo-client';
import MainLayout from '../layout/MainLayout'

class MyApp extends App {

  render() {
    const { Component, apolloClient, pageProps } = this.props
    console.log('Travis seems to work - testing with codecov bot installed')
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <MainLayout>
            <PageTransition timeout={300} classNames="page-transition">
              <Component {...pageProps} />
            </PageTransition>
          </MainLayout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
