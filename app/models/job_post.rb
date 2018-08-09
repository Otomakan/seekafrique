class JobPost
  include Mongoid::Document
  field :jobTitle, type: String
  field :jobDescription, type: String
  field :startDate, type: Date
  has_many :language
  belongs_to :company
  has_many :userProfile
  has_many :industry
end
