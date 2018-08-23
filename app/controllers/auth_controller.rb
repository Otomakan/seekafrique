
class AuthController < ApplicationController
  # To authenticate users we use the AuthUser command and then if sucessful we send an authToken and name and usertype
  # We check if the user had a name and if so we send it to the front end
	def userauthenticate
   		command = AuthUser.call(user_params[:email], user_params[:password])
	   	if command.success?
        @current_user = User.find_by('email':user_params[:email])
        if  @current_user['userProfile']
          if  @current_user.userProfile.personalInfo
          render json: { auth_token: command.result, name: @current_user.userProfile.personalInfo.firstName, user_type: 'user'}, status: 200
          else
          render json:{auth_token: command.result,message: 'identified! But no name yet!',user_type: 'user'}, status: 200
          end
        else
          render json:{auth_token: command.result,message: 'identified! But no name yet!',user_type: 'user'}, status: 200
        end
    	else
     		render json: { error: command.errors }, status: :unauthorized
   		 end
 	end

  # For token verification the magic happens in the api call commands /commands/auth_api_calls.rb


 	def userchecktoken
 		@current_user = AuthApiCalls.call(request.headers).result
    if @current_user
      if  @current_user['userProfile']
        if  @current_user.userProfile.personalInfo
 			    render json: { name: @current_user.userProfile.personalInfo.firstName, user_type: 'user'}, status: 200
        else
          render json:{message: 'identified! But no name yet!',user_type: 'user'}, status: 200
        end

    
 		   else
        render json: {message: 'Success', user_type: 'company', name: @current_user['companyName']}, status:200
    end
    else
      render json: { error: @current_user.errors.messages }, status: 401
		end
end 

  def companyauthenticate
      command = AuthCompany.call(company_params[:email], company_params[:password])
      if command.success?
           @current_company = Company.find_by('email': company_params[:email])
        if  @current_company['companyName']
          render json: { auth_token: command.result, name: @current_company.companyName, user_type: 'company'}, status: 200
        else
          render json:{auth_token: command.result,message: 'identified! But no name yet!',user_type: 'company'}, status: 200
        end
      else
        render json: { error: command.errors }, status: :unauthorized
      end
  end
  private
 	def user_params
      params.permit(:email, :password)
    end
  def company_params
      params.require(:auth).permit(:email, :password)
  end
  end