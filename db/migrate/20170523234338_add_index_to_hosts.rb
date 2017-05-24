class AddIndexToHosts < ActiveRecord::Migration[5.0]
  def change
    add_index :hosts, [:user_id, :event_id], unique: true
  end
end
