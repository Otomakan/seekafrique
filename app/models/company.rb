class Company
  include Mongoid::Document
  include ActiveModel::SecurePassword
  field :email, type: String

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },  uniqueness: { case_sensitive: false }
  
  field :password_digest
  has_secure_password
  field :companyName, type: String
  field :description, type: String
  field :website, type: String
  has_many :job_posts 
  has_many :applications
end
