class Education
  include Mongoid::Document
  has_one :institution
  has_many :language
  field :tempInstitution, type: String
  field :degreeName, type: String
  field :startDate, type: Date
  field :endDate, type: Date
end
