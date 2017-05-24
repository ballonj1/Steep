class Remove < ActiveRecord::Migration[5.0]
  def change
    remove_index :hosts, column: :user_id
  end
end
