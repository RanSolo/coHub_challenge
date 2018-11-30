import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider}  from 'react-apollo';
import Questions from './components/Questions';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App container">
          <div className="row">
            <img src={logo}
                 className="App-logo"
                 alt="CoHub logo"
                 style={{ display: 'block', margin: 'auto' }} />
          </div>
          <div className="row">
            <h2 style={{ display: 'block', margin: 'auto' }}>Quiz</h2>
          </div>
          <Questions />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
