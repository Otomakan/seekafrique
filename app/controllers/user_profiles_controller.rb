class UserProfilesController < ApplicationController
    before_action :authenticate_request
    attr_reader :current_user
    def createpinfo
    	puts "CURRENT USER IS"
    	puts @current_user.password
    	# @current_user.userProfile.personalInfo.set(pinfo_params)
    	@current_user.userProfile.personalInfo.update({'lastName':'guigui'})
    	puts @current_user.email
    	puts @current_user.userProfile.personalInfo.lastName
    	if @current_user.save
    		puts"IN SAVING"
    		puts @current_user.userProfile.personalInfo
    		render json: {message: @current_user.errors}, status: 200
    	else
    		puts @current_user.errors.messages
    		render json: {error: @current_user.errors}, status: 401
   		end
    end

    private
	    def authenticate_request
			@current_user = AuthApiCalls.call(request.headers).result
			render json: { error: 'Not Authorized' }, status: 401 unless @current_user
		end

		def pinfo_params
			params.require(:user_profile).permit(:firstName, :lastName, :phoneNumber, :address)
		end

end