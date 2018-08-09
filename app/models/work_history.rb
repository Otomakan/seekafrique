class WorkHistory
  include Mongoid::Document
  field :company, type: String
  field :jobTitle, type: String
  field :startDate, type: Date
  field :endDate, type: Date
  field :companyWebsite, type: String
end
