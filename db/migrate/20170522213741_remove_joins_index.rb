class RemoveJoinsIndex < ActiveRecord::Migration[5.0]
  def change
    remove_index :joins, [:user_id, :event_id]
  end
end
