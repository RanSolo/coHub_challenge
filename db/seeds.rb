questions = [
  {
    label: 'How many years have you been developing software?',
    field_type: 'number'
  },
  {
    label: 'Are you a good developer?',
    field_type: 'boolean'
  },
  {
    label: 'What is your favorite programming language?',
    field_type: 'select',
    options: %w[Select Ruby Javascript PHP C# C++ Java Objective-C Swift Go
                Python Cobol Fortran]
  },
  {
    label: 'Select two or three of your second favorite programming languages:',
    field_type: 'list',
    options: %w[Ruby Javascript PHP C# C++ Java Objective-C Swift Go Python
                Cobol Fortran]
  },
  {
    label: "Are you guys gonna hire me?",
    field_type: 'select',
    options: %w[Select Yes No Maybe]
  }
]

questions.each_with_index do |opts, index|
  Question.create(opts.merge(position: index))
end

AdminUser.create!(email: 'admin@example.com', password: 'password',
                  password_confirmation: 'password') if Rails.env.development?
