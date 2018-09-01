class UserProfile
  include Mongoid::Document
  include Mongoid::Timestamps::Created
  embeds_one :personalInfo, autobuild: true
  embeds_many :educations
  embeds_many :workHistorys
  embeds_many :tempApplications
  has_many :applications
  embedded_in :user
end
