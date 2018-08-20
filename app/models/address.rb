class Address
  include Mongoid::Document
  field :addressLine, type: String
  field :zipcode, type: String
  field :region, type: String
  field :city, type: String
  # has_one :country
  embedded_in :personalInfo
end
