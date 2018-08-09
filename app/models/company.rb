class Company
  include Mongoid::Document
  include ActiveModel::SecurePassword
  field :email, type: String
  field :password_digest
 
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :xemail, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },  uniqueness: { case_sensitive: false }
  has_secure_password
  validates :password, length: { minimum: 6 }
  field :description, type: String
  field :website, type: String
  has_many :job_posts 
  has_many :applications
end
