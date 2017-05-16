class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :date, null: false
      t.string :time, null: false
      t.string :address, null: false
      t.string :description, null: false
      t.integer :host_id, null: false
      t.integer :city_id, null: false
      t.integer :max_attend, null: false

      t.timestamps
    end
    add_index :events, :host_id
    add_index :events, :city_id
  end
end
