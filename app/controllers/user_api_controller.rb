# The company api controller is used to check request and create a @current_user variable accessible in child classes
class UserApiController < ApplicationController
    before_action :authenticate_request
    attr_reader :current_user
    private
	def authenticate_request
		@current_user = AuthApiCalls.call(request.headers).result
		render json: { error: 'Not Authorized' }, status: 401 unless @current_user
	end
end