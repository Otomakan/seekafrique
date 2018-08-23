import {companyJobPostsConstants} from '../actions/companyJobPostsActions'

export default function companyJobPostReducer(state={
	jobPost:{
		title:'',
		description:'',
		salary:'',
		contractType:'',
		startDate:new Date(),
	},	
	allJobPosts:[],
},actions){
	switch(actions.type){
		case  companyJobPostsConstants.CHANGE_STATE:
			state.jobPost=actions.jobPost
			return {
				...state,
			}
		case companyJobPostsConstants.JOB_POST_REQUEST:
			return {
				...state,
				loading:true,
				errors:null,
			}
		case companyJobPostsConstants.JOB_POST_SUCCESS:
			return {
				...state,
				loading:false,
				errors:null,
			}
		case companyJobPostsConstants.JOB_POST_FAILURE:
			return {
				...state,
				loading:false,
				errors: actions.err,
			}
		case companyJobPostsConstants.SHOW_JOB_POST_REQUEST:
			return {
				...state,
				loading:true,
			}
		case companyJobPostsConstants.SHOW_JOB_POST_SUCCESS:
			return {
				...state,
				loading:false,
				allJobPosts: actions.allJobPosts,
			}
		case companyJobPostsConstants.SHOW_JOB_POST_FAILURE:
			return {
				...state,
				loading:false,
				errors: actions.err,
			}
		default:
			return{
				...state
			}
	}

}