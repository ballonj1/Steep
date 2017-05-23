class ChangeCityId < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :city_id
    add_column :users, :city_name, :string
  end
end
