import {userJobPostsConstants} from '../actions/userJobPostsActions'

export default function userJobPostsReducer(state={
	loading:false,
	allJobPosts:[],
}, actions){
	switch(actions.type){
		case userJobPostsConstants.SHOW_JOB_POSTS_REQUEST:
		return {
			...state,
			loading:true,
		}
		case userJobPostsConstants.SHOW_JOB_POSTS_SUCCESS:
		return {
			...state,
			loading:false,
			errors:null,
			allJobPosts: actions.allJobPosts
		}
		case userJobPostsConstants.SHOW_JOB_POSTS_FAILURE:
		return {
			...state,
			loading:false,
			errors:actions.err
		}
		case userJobPostsConstants.SAVE_JOB_POST_REQUEST:
		return {
			...state,
			loading:true,
		}
		case userJobPostsConstants.SAVE_JOB_POST_SUCCESS:
		return {
			...state,
			loading:false,
			jobPostSaved:true,
		}
		case userJobPostsConstants.SAVE_JOB_POST_FAILURE:
		return {
			...state,
			loading:false,
			jobPostSaved:false,
		}
		default:
		return {
			...state
		}
	}

}