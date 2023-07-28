class Project < ApplicationRecord
  belongs_to :user
  has_many :histories, dependent: :destroy

  validates :name, presence: true, length: { maximum: 15 }
end
