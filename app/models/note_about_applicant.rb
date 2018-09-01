class NoteAboutApplicant
	include Mongoid::Document
	field :title, type:String
	field :content, type:String
	belongs_to :company
	has_one :user
end