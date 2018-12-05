class Quiz < ApplicationRecord
  validates :participant_name, presence: true
end
