class UsersController < ApplicationController
	
	def show
  		render json: {users: User.all}, status:200
  	end


    def create
     	 @user = User.new(user_params)
    # respond_to do |format|
	    if @user.save
	      render json: { success:"Yay it worked", user: @user}, status: 200
	    else
	      render json: {error_message: @user.errors.messages.to_json()}, status: 401    #   end
   		end
    end
    def create_user_profile
    	
    end
    private 	
	    # Never trust parameters from the scary internet, only allow the white list through.
	    def user_params
	    	puts params
	      params.permit(:email, :password, :subscription)
	    end

end	

