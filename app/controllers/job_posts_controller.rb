class JobPostsController < CompanyApiController

	def createpost
		@jobpost =  JobPost.new(create_post_params)
		@jobpost.company = @current_company
		if @jobpost.save
			render json: {message:"It worked"}, status: 200
		else
			puts @jobpost.errors.messages
	      render json: {error: @jobpost.errors.messages}, status: 401   
   		end

	end

	def showallownposts
		allPosts = []
		JobPost.where(company: @current_company).each do |jobPost|
			allPosts.push(jobPost)
		end
		render json: {allJobPosts: allPosts}, status: 200
	end

	def showallapplications
		# try to create an object which has 
		
 # Make sure when you make a show allapplications request that the company making the request is the owner of the jobposts
		allApplications = []
		JobPost.find(show_applications_params['id']).applications.each do |application|
			app_id = application.id
			application = Hash[application.attributes].merge(Hash[User.find(application['user_id']).userProfile.attributes])
			puts "application. id is"
			application['_id'] = app_id
			allApplications.push(application)
		end
		render json: {allApplications: allApplications}, status: 200
	end

	def changeapplicationstatus
		Application.find(update_status_params['applicationId']).update(status: update_status_params['newStatus'])
		# puts Application.find(update_status_params['id']).status
		render json: {message:'Success'}, status: 200
	end

	private

	def show_applications_params
		params.permit(:id)	
	end
	def update_status_params
		params.permit(:applicationId, :newStatus)	
	end
	def create_post_params
		params.require(:jobPost).permit(:title, :description, :salary, :startDate, :contractType)
	end
end