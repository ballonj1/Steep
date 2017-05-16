class User < ApplicationRecord
  validates :first_name, :last_name, :password_digest,
  :session_token, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :joined_events
  has_many :hosts

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.valid_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save
    self.session_token
  end
end
