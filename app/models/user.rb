class User
  include Mongoid::Document
  include ActiveModel::SecurePassword
  field :email, type: String

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },  uniqueness: { case_sensitive: false }
  
  field :password_digest
  has_secure_password
  has_and_belongs_to_many :savedPosts, class_name:"JobPost"
  embeds_one :userProfile, autobuild: true
  field :subscription, type:String
  validates :subscription, inclusion: {in: ['free', 'classic','premium'], message: '%{value} is not a valid subscription type'}
end
