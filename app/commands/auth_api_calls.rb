class AuthApiCalls
	include JWTHelper
	prepend SimpleCommand

	def initialize(headers={})
		@headers = headers
	end

	def call
		user
	end

	private

	attr_reader :headers

	def user
		if decoded_token
			authed_user = User.find(decoded_token["user_id"]["$oid"]) 
			if authed_user
				@user = authed_user
			else
				@user = errors.add(:token, "invalid token")
			end
		else
			@user || errors.add(:token, "invalid token") && nil
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