import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider }  from 'react-apollo';
import CreateQuiz from './components/Create_Quiz';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql'
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
                 style={{ display: 'block', margin: 'auto' }}
            />
          </div>
          <div className="row">
            <h2 style={{ display: 'block', margin: 'auto' }}>Quiz</h2>
          </div>
          <CreateQuiz />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
