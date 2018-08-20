class UsersController < ApplicationController

	def show
  		render json: {users: User.all}, status:200
  	end


    def create
     	 @user = User.create(user_params)
     	# @user.update(userProfile:UserProfile.new())
     	# 	 @user.userProfile.update(
    	# 	 personalInfo:PersonalInfo.new(),
  		# 'education.first': Education.new(),
  		# 'workHistory.first': WorkHistory.new(),
  		# 'tempApplication.first': TempApplication.new(),)
    	# respond_to do |format|
	    if @user.save
	      render json: { success:"Yay it worked", user: @user}, status: 200
	    else
	      render json: {error: @user.errors.messages}, status: 401    #   end
   		end
    end
    def create_user_profile
    	
    end
    private 	
	    # Never trust parameters from the scary internet, only allow the white list through.
	    def user_params
	      params.require(:user).permit(:email, :password, :password_confirmation, :subscription)
	    end

end	

