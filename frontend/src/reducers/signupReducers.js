import {signupConstants} from '../actions/signUpActions.js'

function signup(state={loggedIn:false}, action){
	switch(action.type){
		case signupConstants.SIGNUP_REQUEST:
			return{
				isLoading:true
			}
		case signupConstants.SIGNUP_SUCCESS:
			return{
				signedUp:true
			}
		case signupConstants.SIGNUP_FAIL:
			return{
				signedUp:false
			}
	}
}