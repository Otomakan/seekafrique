class User
  include Mongoid::Document
  include ActiveModel::SecurePassword
  field :email, type: String
  field :password_digest
 
   VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },  uniqueness: { case_sensitive: false }
  has_secure_password
  validates :password, length: { minimum: 6 }
  embeds_one :userProfile
  field :subscription, type:String
  validates :subscription, inclusion: {in: ['free', 'classic','premium'], message: "%{value} is not a valid subscription type"}
end
