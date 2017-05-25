class Event < ApplicationRecord
  validates :date, :time, :address, :description, :host_id, :city_id,
  :max_attend, presence: true

  has_many :joins, dependent: :destroy
  has_one :host, dependent: :destroy
  has_many :users, through: :joins
  belongs_to :city
end
