class PersonalInfo
  include Mongoid::Document
  field :firstName, type: String
  field :lastName, type: String
  field :birthday, type: Date
  field :phoneNumber, type: String
  # field :nationality, type: :country
  has_many :nationality, class_name: "Country"
  has_many :language
  embeds_one :address
  belongs_to :userProfile
end

