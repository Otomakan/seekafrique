
class AuthController < ApplicationController
	def authenticate
      puts "in authenticate"
      puts user_params
   		command = AuthUser.call(user_params[:email], user_params[:password])

	   	if command.success?
    		render json: {auth_token: command.result, email: user_params[:email] }, status: 200
   		else
     		render json: { error: command.errors }, status: :unauthorized
   		end
 	end

 	def checktoken
 		@current_user = AuthApiCalls.call(request.headers).result
 		if @current_user
 			render json: { email: @current_user.email}, status: 200
 		else	
 			render json: { error: 'Not Authorized' }, status: 401
		end
	end
 	def user_params
      puts params
      params.permit(:email, :password)
    end
  end