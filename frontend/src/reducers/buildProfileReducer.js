import {buildProfileConstants} from '../actions/buildProfileActions.js'

export default function(state={personalInfo:false,
	isLoading:false, 
	step:1, 
	education:[{
		degreeName:"",
	  	tempInstitution:"",
	  	startDate: new Date(),
	  	endDate: new Date(),
	  	errors:[],
	  	currentlyStudying: false,
	}],
	workH:[{
			company:"",
	  		companyWebsite:"",
	  		jobTitle:"",
	  		startDate: new Date(),
	  		endDate: new Date(),
	  		currentlyWorking: false,
	}]}, action){
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
				step:2
			}
		case buildProfileConstants.PINFO_FAILURE:
			return{
				...state,
				personalInfo:false,
				isLoading:false,
				err: action.err,
				step:1
			}
		case buildProfileConstants.EDUCATION_REQUEST:
			return{
				...state,
				isLoading:true,
				err: null,
				step:2
			}
		case buildProfileConstants.EDUCATION_SUCCESS:
			return{
				...state,
				education:true,
				isLoading:false,
				err: null,
				step:3
			}
		case buildProfileConstants.EDUCATION_FAILURE:
			return{
				...state,
				education:false,
				isLoading:false,
				err: action.err,
				step:2
			}
		case buildProfileConstants.WHISTORY_REQUEST:
			return{
				...state,
				isLoading:true,
				err: null,
				step:3
			}
		case buildProfileConstants.WHISTORY_SUCCESS:
			return{
				...state,
				whistory:true,
				isLoading:false,
				err: null,
				step:4
			}
		case buildProfileConstants.WHISTORY_FAILURE:
			return{
				...state,
				whistory:false,
				isLoading:false,
				err: action.err,
				step:3
			}
		case buildProfileConstants.ADD_EDUCATION:
			return{
				...state,
				whistory:false,	
				education: state.education.concat({
					degreeName:"",
				  	tempInstitution:"",
				  	startDate: new Date(),
				  	endDate: new Date(),
				  	errors:[],
				})
				
			}
		case buildProfileConstants.REMOVE_EDUCATION:
			state.education.splice(action.eduIndex,1)
			return{
				...state,
			}
		case buildProfileConstants.CHANGE_EDU_STATE:
			state.education[action.eduIndex] = action.eduState
			return {
				...state,
			}
		case buildProfileConstants.ADD_EDUCATION:
			return{
				...state,
				whistory:false,	
				education: state.education.concat({})
				
			}
		case buildProfileConstants.ADD_WORK:
			return{
				...state,
				workH: state.workH.concat({
					company:"",
			  		companyWebsite:"",
			  		jobTitle:"",
			  		startDate: new Date(),
			  		endDate: new Date(),
				})
			}
		case buildProfileConstants.REMOVE_WORK:
			state.workH.splice(action.wIndex,1)
			return{
				...state,
				whistory:false,	
			}
		case buildProfileConstants.CHANGE_WORK_STATE:
			state.workH[action.workIndex] = action.workState
			return {
				...state,	
			}
		default: 
			return {...state}
	}
}