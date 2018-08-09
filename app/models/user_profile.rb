class UserProfile
  include Mongoid::Document
  embeds_one :personalInfo
  embeds_many :education
  embeds_many :workHistory
  embeds_many :tempApplication
  has_many :application
end
