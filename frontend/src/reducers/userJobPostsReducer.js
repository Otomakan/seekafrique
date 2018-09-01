import {userJobPostsConstants} from '../actions/userJobPostsActions'

export default function userJobPostsReducer(state={
	mainLoading:false,
	allJobPosts:[],
	savedJobPosts:[],
	jobApplication:{
		coverLetter:"",
	},
}, actions){
	switch(actions.type){
		case userJobPostsConstants.SHOW_JOB_POSTS_REQUEST:
		return {
			...state,
			mainLoading:true,
		}
		case userJobPostsConstants.SHOW_JOB_POSTS_SUCCESS:
		return {
			...state,
			mainLoading:false,
			errors:null,
			allJobPosts: actions.allJobPosts
		}
		case userJobPostsConstants.SHOW_JOB_POSTS_FAILURE:
		return {
			...state,
			mainLoading:false,
			errors:actions.err
		}
		case userJobPostsConstants.SAVE_JOB_POST_REQUEST:
		return {
			...state,
			saveJobPostLoading:true,
		}
		case userJobPostsConstants.SAVE_JOB_POST_SUCCESS:
		return {
			...state,
			saveJobPostLoading:false,
			jobPostSaved:true,
		}
		case userJobPostsConstants.SAVE_JOB_POST_FAILURE:
		return {
			...state,
			saveJobPostLoading:false,
			jobPostSaved:false,
		}
		case userJobPostsConstants.SHOW_SAVED_JOB_POSTS_REQUEST:
		return {
			...state,
			mainLoading:true,
		}
		case userJobPostsConstants.SHOW_SAVED_JOB_POSTS_SUCCESS:
		return {
			...state,
			mainLoading:false,
			errors:null,
			savedJobPosts: actions.savedJobPosts
		}
		case userJobPostsConstants.SHOW_SAVED_JOB_POSTS_FAILURE:
		return {
			...state,
			mainLoading:false,
			errors:actions.err
		}
		case userJobPostsConstants.UNSAVE_JOB_POST_REQUEST:
		return {
			...state,
			unsaveJobPostLoading:true,
		}
		case userJobPostsConstants.UNSAVE_JOB_POST_SUCCESS:
		return {
			...state,
			unsaveJobPostLoading:false,
			errors:null,
		}
		case userJobPostsConstants.UNSAVE_JOB_POST_FAILURE:
		return {
			...state,
			unsaveJobPostLoading:false,
			errors:actions.err
		}

		case userJobPostsConstants.CHANGE_APPLICATION_STATE:
		return{
			...state,
			jobApplication: actions.jobApplication
		}

		case userJobPostsConstants.SHOW_ALL_APPLICATIONS_REQUEST:
			return{
				...state,
				mainLoading:true,
			}
		case userJobPostsConstants.SHOW_ALL_APPLICATIONS_SUCCESS:
			return{
				...state,
				mainLoading:false,
				allOwnApplications: actions.allOwnApplications,
				errors:null
			}
		case userJobPostsConstants.SHOW_ALL_APPLICATIONS_FAILURE:
			return{
				...state,
				mainLoading:false,
				errors: actions.err
			}
		default:
		return {
			...state
		}
	}

}