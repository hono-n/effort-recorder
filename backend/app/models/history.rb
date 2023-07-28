class History < ApplicationRecord
  belongs_to :project

  validates :memo, length: { maximum: 50 }
end
