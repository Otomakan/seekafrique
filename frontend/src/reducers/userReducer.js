import {userConstants} from '../actions/userActions.js'

export default function userProfile(state = {userProfile:""},action){
	switch(action.type) {
		case userConstants.GET_PROFILE:
      return {
        isLoading: true,

    }
    case userConstants.GET_PROFILE_SUCCESS:
      return {
        isLoading: false,
        userProfile: action.profile
      }
    case userConstants.GET_PROFILE_FAILURE:
      return {
        isLoading: false,
        errors: action.error
      }
    default:
      return state
	}

}