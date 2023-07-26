# frozen_string_literal: true

user_ids = User.ids

user_ids.each do |user_id|
  user = User.find(user_id)
  (1..10).each do |idx|
    Project.create(
      user_id: user.id,
      name: "プロジェクト#{user.id}-#{idx}"
    )
  end
end
