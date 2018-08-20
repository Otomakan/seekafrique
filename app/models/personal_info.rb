class PersonalInfo
  include Mongoid::Document
  field :firstName, type: String
  field :lastName, type: String
  field :birthday, type: Date
  VALID_PHONE_NUMBER_REGEX = /\A(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\z/
  field :phoneNumber, type:String
  validates :phoneNumber, length: {maximum: 15},
                    format: { with: VALID_PHONE_NUMBER_REGEX }
  # field :nationality, type: :country
  has_many :nationality, class_name: "Country"
  has_many :language
  embeds_one :address, autobuild: true
  embedded_in :user_profile
end

