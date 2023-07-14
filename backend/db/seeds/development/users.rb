# frozen_string_literal: true

1.upto(10) do |idx|
  User.create(
    user_name: "test#{idx}",
    password: "testpass#{idx}",
    password_confirmation: "testpass#{idx}"
  )
end
