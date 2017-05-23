class AddCityId < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :city_name, :string
    add_column :users, :city_id, :integer
  end
end
