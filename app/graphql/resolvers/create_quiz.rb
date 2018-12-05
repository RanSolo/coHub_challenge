class Resolvers::CreateQuiz < GraphQL::Function
  # arguments passed as "args"
  argument :participant_name, !types.String
  argument :answers, !types.String

  # return type from the mutation
  type Types::QuizType

  # the mutation method
  # _obj - is parent object, which in this case is nil
  # args - are the arguments passed
  # _ctx - is the GraphQL context (which would be discussed later)
  def call(_obj, args, _ctx)
    Quiz.create!(
      participant_name: args[:participant_name],
      answers: args[:answers]
    )
  end
end
