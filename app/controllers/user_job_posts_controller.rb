class UserJobPostsController < UserApiController
	def showallposts
		render json: {allJobPosts: JobPost.all}, status:200
	end

	def savepost
		if(JobPost.find(save_post_params['id']))
			@current_user.savedPosts << JobPost.find(save_post_params['id'])
			@current_user.save
			render json: {message:'success'}, status: 200
		else
			render json:{error:"something went wrong"}, status:401
		end
	end

	private
	def save_post_params
		params.permit(:id)
	end
end