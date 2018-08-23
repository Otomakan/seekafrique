import {companyConstants} from '../actions/companyActions'

export default function companyReducer(
	state={companyProfile:{
		companyName:"",
		website:"",
		descrition:"",
	},
isLoading:false,}, actions){
	switch(actions.type){
		 case companyConstants.GET_PROFILE:
		 return({
			...state,
		 	isLoading:true
		 }
		 	)
		 case companyConstants.GET_PROFILE_SUCCESS:
		 return({
			...state,
		 	companyProfile: actions.profile,
		 	isLoading:false
		 }
		 	)
		 		 case companyConstants.GET_PROFILE_FAILURE:
		 return({
		 	...state,
		 	isLoading:false
		 }
		 	)
		default:
		return({...state})
	}
}
