class CreateHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :histories do |t|
      t.references :user, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true
      t.string :target_month, null: false
      t.string :target_date, null: false
      t.bigint :start_timestamp, null: false
      t.bigint :end_timestamp, null: false
      t.bigint :total, null: false
      t.string :memo

      t.timestamps
    end
  end
end
