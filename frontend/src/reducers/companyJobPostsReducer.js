import {companyJobPostsConstants} from '../actions/companyJobPostsActions'

export default function companyJobPostsReducer(state={
	jobPost:{
		title:'',
		description:'',
		salary:'',
		contractType:'',
		startDate:new Date(),
	},	
	allJobPosts:[],
	allApplications:[],
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


		case companyJobPostsConstants.SHOW_APPLICATIONS_REQUEST:
			return {
				...state,
				loading:true,
			}
		case companyJobPostsConstants.SHOW_APPLICATIONS_SUCCESS:
			return {
				...state,
				loading:false,
				allApplications: actions.allApplications,
			}
		case companyJobPostsConstants.SHOW_APPLICATIONS_FAILURE:
			return {
				...state,
				loading:false,
				errors: actions.err,
			}
		case companyJobPostsConstants.CHANGE_APPLICATION_STATUS_REQUEST:
		return{
			...state,
			changeStatusRequest:true,
		}
		case companyJobPostsConstants.CHANGE_APPLICATION_STATUS_SUCCESS:
		state.allApplications[actions.key].status = actions.newStatus		
		return {
			...state,
		}
		case companyJobPostsConstants.CHANGE_APPLICATION_STATUS_FAILURE:
		return{
			...state,
			errors: actions.err
		}
		default:
			return{
				...state
			}
	}

}