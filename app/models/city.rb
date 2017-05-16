class City < ApplicationRecord
  validates :name, :image_url, presence: true
end
