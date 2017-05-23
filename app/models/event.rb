class Event < ApplicationRecord
  validates :date, :time, :address, :description, :host_id, :city_id,
  :max_attend, presence: true

  has_many :joins
  has_many :users, through: :joins
  belongs_to :city
  belongs_to :host, primary_key: 'id', foreign_key: 'host_id', class_name: 'User'
end
