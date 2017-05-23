class AddJoinEventIndex < ActiveRecord::Migration[5.0]
  def change
    add_index :joins, [:user_id, :event_id], unique: true
  end
end
