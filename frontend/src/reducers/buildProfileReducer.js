import {buildProfileConstants} from '../actions/buildProfileActions.js'

export default function(state={personalInfo:false,isLoading:false}, action){
	switch(action.type){
		case buildProfileConstants.PINFO_REQUEST:
			return{
				...state,
				isLoading:true,
				err: null,
			}
		case buildProfileConstants.PINFO_SUCCESS:
			return{
				...state,
				personalInfo:true,
				isLoading:false,
				err: null,
			}
		case buildProfileConstants.PINFO_FAILURE:
			return{
				...state,
				personalInfo:false,
				isLoading:false,
				err: action.err,
			}
		case buildProfileConstants.EDUCATION_REQUEST:
			return{
				...state,
				isLoading:true,
				err: null,
			}
		case buildProfileConstants.EDUCATION_SUCCESS:
			return{
				...state,
				education:true,
				isLoading:false,
				err: null,
			}
		case buildProfileConstants.EDUCATION_FAILURE:
			return{
				...state,
				education:false,
				isLoading:false,
				err: action.err
			}
		case buildProfileConstants.WHISTORY_REQUEST:
			return{
				...state,
				isLoading:true,
				err: null,
			}
		case buildProfileConstants.WHISTORY_SUCCESS:
			return{
				...state,
				whistory:true,
				isLoading:false,
				err: null,
			}
		case buildProfileConstants.WHISTORY_FAILURE:
			return{
				...state,
				whistory:false,
				isLoading:false,
				err: action.err
			}
		default: 
			return {...state}
	}
}