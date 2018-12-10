import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import QuizForm from './Quiz_Form';

// query that pulls the questions from graphql for display in the quiz
const QUESTIONS_QUERY = gql`
  query QuestionsQuery{
    Questions {
      position
      label
      field_type
      options
      multiselect
    }
  }
`;

export class CreateQuiz extends Component {
  render() {
    return (
      <div key="container">
        <h1 className="display-4 my-3">Questions</h1>
        <Query query={QUESTIONS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>loading...</h4>;
            if (error) console.log(error);
            return <QuizForm data={data} />
          }}
        </Query>
      </div>
    )
  }
}

export default CreateQuiz;
