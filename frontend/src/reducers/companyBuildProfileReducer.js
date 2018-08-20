import {companyBuildProfileConstants} from '../actions/companyBuildProfileActions.js'

export default function(state={
	basicInfo:{
		companyName:"",
	  	description:"",
	  	phoneNumber: "",
	}, 
	isLoading:false,
	},actions){
	switch(actions.type){
		case companyBuildProfileConstants.BASIC_INFO_REQUEST:
		return{
				...state,
				isLoading:true,
			}
		case companyBuildProfileConstants.BASIC_INFO_SUCCESS:
			return{
				...state,
				isLoading:false,
			}
		case companyBuildProfileConstants.BASIC_INFO_FAILURE:
			return{
				...state,
				isLoading:false,
				basicInfo: actions.binfo,
			}
		case companyBuildProfileConstants.BASIC_INFO_CHANGE:
			return{
				...state,
				basicInfo: actions.binfo,
			}
		default:
			return {...state}
	}
}
