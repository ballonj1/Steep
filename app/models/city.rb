class City < ApplicationRecord
  validates :name, :image_url, presence: true

  has_many :events
end
