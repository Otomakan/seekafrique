class Application
  include Mongoid::Document
  include Mongoid::Timestamps::Created
  field :status, type: String
  field :coverLetter, type: String
  validates :status, inclusion: {in:['closed', 'approved', 'underRev', 'submitted', 'canceled'], message: "%{value} is not a valid status type"}
  belongs_to :user
  belongs_to :jobPost

end
