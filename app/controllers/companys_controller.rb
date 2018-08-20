class CompanysController < ApplicationController

	def show
  		render json: {companys: Company.all}, status:200
  	end


    def create
     	 @company = Company.create(company_params)
     	# @company.update(companyProfile:companyProfile.new())
     	# 	 @company.companyProfile.update(
    	# 	 personalInfo:PersonalInfo.new(),
  		# 'education.first': Education.new(),
  		# 'workHistory.first': WorkHistory.new(),
  		# 'tempApplication.first': TempApplication.new(),)
    	# respond_to do |format|
	    if @company.save
	      render json: { success:"Yay it worked", company: @company}, status: 200
	    else
	      render json: {error: @company.errors.messages}, status: 401    #   end
   		end
    end
    def create_company_profile
    	
    end
    private 	
	    # Never trust parameters from the scary internet, only allow the white list through.
	    def company_params
	      params.require(:company).permit(:email, :password, :password_confirmation)
	    end

end	

