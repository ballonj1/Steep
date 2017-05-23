class Add < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :current_attend, :integer, :default => 0
  end
end
