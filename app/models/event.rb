class Event < ApplicationRecord
  validates :date, :time, :address, :description, :host_id, :city_id,
  :max_attend, presence: true

  has_many :joined_events
end
