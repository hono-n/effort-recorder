class CreateHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :histories do |t|
      t.references :user, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true
      t.bigint :start_time_stapm, null: false
      t.bigint :end_time_stapm, null: false
      t.bigint :total, null: false
      t.string :memo

      t.timestamps
    end
  end
end
