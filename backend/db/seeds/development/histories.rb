# frozen_string_literal: true

user_ids = User.ids

user_ids.each do |user_id|
  user = User.find(user_id)
  user.projects.each do |project|
    head = rand(1_667_260_800_000..1_690_848_000_000)
    tail = 1_690_514_600_000
    end_time = head
    total = 0
    cnt = 0
    while true
      cnt += 1
      start_time = end_time + rand(86_400_000..2_592_000_000)
      end_time = start_time + rand(60_000..21_600_000)
      break if start_time > tail || end_time > tail || cnt >= 100

      total += (end_time - start_time)

      History.create(
        user_id: user.id,
        project_id: project.id,
        start_time_stamp: start_time,
        end_time_stamp: end_time,
        total:,
        memo: "memo#{user.id}-#{project.id}-#{cnt}"
      )
    end
  end
end
