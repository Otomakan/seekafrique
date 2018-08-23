class CompanysProfilesController < ApplicationController
    before_action :authenticate_request
    attr_reader :current_company
	def show
  		render json: {users: Company.all}, status:200
  	end

    def create
     	 @company = Company.create(company_params)
     	# @user.update(userProfile:UserProfile.new())
     	# 	 @user.userProfile.update(
    	# 	 personalInfo:PersonalInfo.new(),
  		# 'education.first': Education.new(),
  		# 'workHistory.first': WorkHistory.new(),
  		# 'tempApplication.first': TempApplication.new(),)
    	# respond_to do |format|
	    if @company.save
	      render json: { success:"Yay it worked", user: @company}, status: 200
	    else
	      render json: {error: @company.errors.messages}, status: 401    #   end
   		end
    end
    def createcompanyprofile
    	if @current_company.update!(binfo_params)
        render json: {message: @current_company.errors}, status: 200
      else
        puts "in errors"
        # puts @current_user.errors.messages
        render json: {error: @current_company.errors}, status: 401
      end
    end

    def show
      render json: { profile: @current_company.as_json}, status: 200   
    end

    private 	
    def authenticate_request
      @current_company = AuthCompanyApiCalls.call(request.headers).result
      render json: { error: 'Not Authorized' }, status: 401 unless @current_company
    end
	    # Never trust parameters from the scary internet, only allow the white list through.
	    def company_params
	      params.require(:company).permit(:email, :password, :password_confirmation)
	    end
      def binfo_params
        params.require(:company_profile).permit(:description, :companyName, :website)
      end

end	

