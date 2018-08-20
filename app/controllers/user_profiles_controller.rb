class UserProfilesController < ApplicationController
    before_action :authenticate_request
    attr_reader :current_user
    def createpinfo
    	# testing = personalInfo.create()

    	if @current_user.userProfile.personalInfo.update!(pinfo_params)
			render json: {message: @current_user.errors}, status: 200
    	else
    		puts "in errors"
    		# puts @current_user.errors.messages
    		render json: {error: @current_user.errors}, status: 401
   		end
    end
    def createedu
    	# Looks if each education object is valid, if so it will push it to the education profile
    	edu_params.each{|edu|
    		educ = Education.new(edu.to_hash)
    		if  educ
    			@current_user.userProfile.educations << educ 
    			puts "in it"
    			puts @current_user.userProfile.educations[0].degreeName
    			@current_user.save
    		else
    			render json: {error: ed.errors.messages}, status: 401
    		end
    	}
    	render json: {message: "all good"}, status: 200
    end

    def createworkh
    	# Looks if each education object is valid, if so it will push it to the education profile
    	work_params.each{|workp|
    		work = WorkHistory.new(workp.to_hash)
    		if  work
    			@current_user.userProfile.workHistorys << work 
    			@current_user.save
    		else
    			render json: {error: ed.errors.messages}, status: 401
    		end
    	}
    	render json: {message: "all good"}, status: 200
    end

    def show
    	puts @current_user.userProfile
    	puts @current_user.userProfile.to_json
		render json: { profile: @current_user.userProfile.as_json}, status: 200 	
    end

    private
	    def authenticate_request
			@current_user = AuthApiCalls.call(request.headers).result
			render json: { error: 'Not Authorized' }, status: 401 unless @current_user
		end

		def pinfo_params
			params.require(:user_profile).permit(:firstName, :lastName, :phoneNumber, :birthday, address:["addressLine", "zipcode","region","city"])
		end

		def edu_params
			puts "in edu params"
			puts params
			# Allows filterning of parameter in array
			params.require(:educationH).map do |p|
   	 			p.permit(:tempInstitution, :degreeName, :startDate, :endDate)
			end
		end
		def work_params
			puts "in edu params"
			puts params
			# Allows filterning of parameter in array
			params.require(:workH).map do |p|
   	 			p.permit(:company, :jobTitle, :companyWebsite, :startDate, :endDate)
			end
		end

end