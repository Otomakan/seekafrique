class UserJobPostsController < UserApiController
	def showallposts
		allPost = []
		# IN the controller we create a custom hash including the company name and whether the applicant applied, saved or not
		JobPost.all.each do|jp|
			if @current_user.applications.where(jobPost_id:jp).exists?
				applied = true
			else
				applied = false
			end
			saved = false
			@current_user.savedPosts.each do |sp|
				if sp == jp
					saved = true
				end	
			end
			companyName = jp.company.companyName
			jp = Hash[jp.attributes]
			jp[:companyName] = companyName
			jp[:saved] = saved
			jp[:applied] = applied
			allPost.push(jp)
		end
		render json: {allJobPosts: allPost}, status:200
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

	def showsavedposts
		render json: {savedJobPosts: @current_user.savedPosts}, status:200
	end

	def showallapplications
		allOwnApplications = []
		# Creating a custom hash to be displayed
		Application.where(user:@current_user).each  do |application|
			application = Hash[application.attributes].merge(Hash[JobPost.find(application['jobPost']).attributes])
			allOwnApplications.push(application)
		end
		render json: {allOwnApplications: allOwnApplications}, status: 200
	end

	def unsavepost
		if(unsave_post_params['id'])
			@current_user.savedPosts.delete(JobPost.find(unsave_post_params['id']))
			render json:{message:'success'}, status: 200
		else
			render json:{errors:'no empty id field'}, status: 401
		end
	end

	def applytojob
		puts application_params
		if @current_user.applications.find_by(jobPost_id:application_params['jobPostId'])
			render json:{errors:'Already Applied to Job'}, status: 401
		else
			@application = Application.new(
			coverLetter:application_params['coverLetter'], 
			user:@current_user, 
			jobPost: JobPost.find(application_params['jobPostId']),
			status:'submitted')
		if @application.save
			render json:{message:'success'}, status: 200
		else
			render json:{errors:@application.errors.messages},status:400
		end
		puts @application.errors.messages
		end
		
	end
	
	private
	def unsave_post_params
		params.permit(:id)
	end
	def save_post_params
		params.permit(:id)
	end
	def application_params
		params.require(:jobApplication).permit(:coverLetter, :jobPostId)
	end
end