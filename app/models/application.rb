class Application
  include Mongoid::Document
  field :status, type: String
  field :coverLetter, type: String

  validates :status, inclusion: {in:['closed', 'approved', 'underRev', 'submitted', 'cancelled'], message: "%{value} is not a valid status type"}
  
  belongs_to :company
  belongs_to :user
  has_one :jobPost

end
