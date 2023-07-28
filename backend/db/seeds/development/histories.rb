# frozen_string_literal: true

user_ids = User.ids

user_ids.each do |user_id|
  puts "- creating user_#{user.id}"
  user = User.find(user_id)
  user.projects.each do |project|
    head = rand(1_667_260_800_000..1_690_848_000_000)
    tail = 1_690_514_600_000
    end_timestamp = head
    total = 0
    cnt = 0
    while true
      cnt += 1
      start_timestamp = end_timestamp + rand(18_000_000..86_400_000)
      end_timestamp = start_timestamp + rand(60_000..21_600_000)
      break if start_timestamp > tail || end_timestamp > tail || cnt >= 100

      total += (end_timestamp - start_timestamp)

      History.create(
        user_id: user.id,
        project_id: project.id,
        start_timestamp:,
        end_timestamp:,
        total:,
        memo: "memo#{user.id}-#{project.id}-#{cnt}"
      )
    end
  end
end
