class User < ApplicationRecord
  validates :first_name, :last_name, :city_id, :password_digest,
  :session_token, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :joined_events
  has_many :hosts

  after_initialize :ensure_session_token

  def find_by_credentials(username, password)
    user = User.find_by(username: username)
    
  end


end
