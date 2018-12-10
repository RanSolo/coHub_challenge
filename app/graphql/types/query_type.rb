Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  # Add root-level fields here.
  field :Questions, types[Types::Question] do
    description 'Returns a list of questions'
    resolve ->(_, _, _) { Question.order(position: :asc) }
  end

  field :ListQuizzes, types[Types::Quiz] do
    description 'Returns a list of Quiz'
    resolve ->(_, _, _) { Quiz.order(participant_name: :asc) }
  end

end
