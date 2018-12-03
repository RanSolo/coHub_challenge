Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createQuiz, function: Resolvers::CreateQuiz.new
end
