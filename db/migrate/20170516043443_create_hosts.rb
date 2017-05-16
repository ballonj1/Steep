class CreateHosts < ActiveRecord::Migration[5.0]
  def change
    create_table :hosts do |t|
      t.string :description, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :hosts, :user_id, unique: true
  end
end
