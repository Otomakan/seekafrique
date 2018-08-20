import {companyConstants} from '../actions/companyActions.js'

export default function companyProfile(state = {companyProfile:""},action){
	switch(action.type) {
		case companyConstants.GET_PROFILE:
      return {
        isLoading: true,

      }
    case companyConstants.GET_PROFILE_SUCCESS:
      return {
        isLoading: false,
        companyProfile: action.profile
      }
    case companyConstants.GET_PROFILE_FAILURE:
      return {
        isLoading: false,
        errors: action.error
      }
    default:
      return state
	}

}