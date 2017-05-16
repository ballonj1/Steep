class CreateJoinedEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :joined_events do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false

      t.timestamps
    end
    add_index :joined_events, [:user_id, :event_id], unique: true
  end
end
