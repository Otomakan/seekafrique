class Language
  include Mongoid::Document
  field :name, type: String
   # embedded_in :education
end
