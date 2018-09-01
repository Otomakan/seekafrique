class Education
  include Mongoid::Document
  # has_one :institution, autobuild: true
  embeds_many :language
  field :tempInstitution, type: String
  field :degreeName, type: String
  field :startDate, type: Date
  field :endDate, type: Date
  field :currentlyStudying, type: Boolean
  embedded_in :userProfile
end
