class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.text :answers
      t.string :participant_name, null: false, default: 'string'
      t.string :score

      t.timestamps
    end
  end
end
