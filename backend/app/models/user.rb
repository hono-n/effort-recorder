class User < ApplicationRecord
  has_secure_password

  validates :user_name, presence: true, uniqueness: true, length: { maximum: 16 }, format: { with: /\A[a-zA-Z0-9]+\z/ }
end
