import {signupConstants} from '../actions/signUpActions.js'
export default signup
function signup(state={loggedIn:false, signUpErrors:[]}, action){
	switch(action.type){
		case signupConstants.SIGNUP_REQUEST:
			return{
				isLoading:true,

			}
		case signupConstants.SIGNUP_SUCCESS:
			return{
				isLoading:false,
				signedUp:true,
				signUpErrors:[],
			}
		case signupConstants.SIGNUP_FAIL:
			return{
				isLoading:false,
				signedUp:false,
				signUpErrors: action.errors,
			}
		default:
		return {...state}
	}

}