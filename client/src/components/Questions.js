import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Question from './Question';
const QUESTIONS_QUERY = gql`
  query QuestionsQuery{
    ListQuestions {
      position
      label
      field_type
      options
      multiselect
    }
  }
`;

export class Questions extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Questions</h1>
        <Query query={QUESTIONS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>loading...</h4>;
            if (error) console.log(error);
            console.log(data.ListQuestions);
            return <Fragment>
              {
                data.ListQuestions.map(question => (
                  <Question key={question.position} question={question} />
              ))
              }
            </Fragment>;
          }}
          </Query>
      </div>
    )
  }
}

export default Questions;
