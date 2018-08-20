class AuthCompanyApiCalls
	include JWTHelper
	prepend SimpleCommand

	def initialize(headers={})
		@headers = headers
	end

	def call
		company
	end

	private

	attr_reader :headers

	def company
		if decoded_token
			authed_company = Company.find(decoded_token["company_id"]["$oid"]) 
			if authed_company
				@company = authed_company
			else
				@company = errors.add(:token, "invalid token")
			end
		else
			@company || errors.add(:token, "invalid token") && nil
		end
	end

	def decoded_token
		@decoded_token ||= JWTdecode(auth_header)
	end
	def auth_header
		if headers['Authorization'].present?
			return headers['Authorization'].split(' ').last
    	else
      		errors.add(:token, 'Missing token')
    	end
   		return nil
	end
end