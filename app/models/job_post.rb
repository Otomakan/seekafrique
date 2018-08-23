class JobPost
  include Mongoid::Document
  field :title, type: String
  field :description, type: String
  field :startDate, type: Date
  field :salary, type:String
  field :contractType, type:String
  has_many :language
  belongs_to :company
  has_and_belongs_to_many :users
  has_one :contractType
end
