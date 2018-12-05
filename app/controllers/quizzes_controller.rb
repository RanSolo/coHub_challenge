class QuestionnaireController < ApplicationController
  def index; end
  ##
  # Create a Example
  #
  def create
    @quiz = Quiz.new(quiz_params)
    @quiz.save

  end

  # Allowed Parameters
  #
  def quiz_params
    params.fetch(:quiz).permit(:answers, :participant_name, :score)
  end
end
