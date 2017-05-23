class EditHostsTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :hosts, :description, :string
    add_column :hosts, :event_id, :integer, null: false
  end
end
