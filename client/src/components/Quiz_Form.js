import React from 'react';
import gql from 'graphql-tag';
import StrappedInput from './form_groups/Strapped_Input';
import { Mutation } from 'react-apollo';
import Question from './Question';
import { Form, TextField, SubmitField} from 'react-components-form';

// Mutation that creates a quiz on submission of the form
const CREATE_QUIZ = gql`
  mutation CreateQuiz($participant_name: String!, $answers: String!) {
    createQuiz(participant_name: $participant_name, answers: $answers) {
      id
      participant_name
      answers
    }
  }
`;

export default function QuizForm({data}) {
  return (
    <Mutation mutation={CREATE_QUIZ}>
      {createQuiz => (
        <Form
          onSubmit={(e) => {
            createQuiz({ variables: {
              "participant_name": e.participant_name,
              "answers": JSON.stringify(e)
            }}) }
          }
        >
          <div className="form-group">
            <TextField label="Participant Name" name="participant_name" className="form-control" />
          </div>
          { data.Questions.map(question => (
            <section key={question.label}>
              <Question question={question} />
            </section>
          ))}
          <SubmitField value="Submit" className="form-control" />
        </Form>
      )}
    </Mutation>
  )
}
