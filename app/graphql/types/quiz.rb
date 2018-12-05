Types::Quiz = GraphQL::ObjectType.define do
  name "Quiz"

  field :id, types.ID
  field :answers, types.String
  field :participant_name, types.String
  field :score, types.String
end
