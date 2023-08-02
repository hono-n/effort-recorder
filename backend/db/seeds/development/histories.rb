# frozen_string_literal: true

user_ids = User.ids

user_ids.each do |user_id|
  user = User.find(user_id)
  puts "- creating user_#{user.id}"
  user.projects.each do |project|
    head = rand(1_667_257_200_000..1_682_895_600_000)
    tail = 1_690_498_800_000
    end_timestamp = head
    total = 0
    cnt = 0
    while true
      cnt += 1
      start_timestamp = end_timestamp + rand(18_000_000..86_400_000)
      end_timestamp = start_timestamp + rand(60_000..21_600_000)
      break if start_timestamp > tail || end_timestamp > tail || cnt >= 100

      time_obj = Time.at((start_timestamp / 1000).round + 9 * 60 * 60)
      target_month = time_obj.strftime('%Y/%m')
      target_date = time_obj.strftime('%m/%d')
      total += (end_timestamp - start_timestamp)

      memo = (cnt % 6).zero? || (cnt % 10) == 1 ? "memo#{user.id}-#{project.id}-#{cnt}" : ''

      History.create(
        user_id: user.id,
        project_id: project.id,
        target_month:,
        target_date:,
        start_timestamp:,
        end_timestamp:,
        total:,
        memo:
      )
    end
  end
end
