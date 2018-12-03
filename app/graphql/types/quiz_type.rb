Types::QuizType = GraphQL::ObjectType.define do
  name "QuizType"

  field :id, types.ID
  field :answers, types.String
  field :participant_name, types.String
  field :score, types.String
end
