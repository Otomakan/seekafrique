# The company api controller is used to check request and create a @current_company variable accessible in child classes
class CompanyApiController < ApplicationController
    before_action :authenticate_request
    attr_reader :current_company
    private
	def authenticate_request
      @current_company = AuthCompanyApiCalls.call(request.headers).result
      render json: { error: 'Not Authorized' }, status: 401 unless @current_company
    end
end