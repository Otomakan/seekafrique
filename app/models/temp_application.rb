class TempApplication
  include Mongoid::Document
  field :coverLetter, type: String
  has_one :jobPost
end
