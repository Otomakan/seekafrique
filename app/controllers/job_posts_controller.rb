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

	private


	def create_post_params
		params.require(:jobPost).permit(:title, :description, :salary, :startDate, :contractType)
	end
end