import { authConstants } from '../actions/authActions.js';

// const initialState = token ? { loggedIn: true, user } : {};
 
function authentication(state = {loggedIn:false,isLoading:true, name:null, user_type:"", loginErrors:[]}, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        isLoading: true,
        loggedIn:false,

      }
    case authConstants.LOGIN_SUCCESS:
      return {
        isLoading: false,
        loggedIn: true,
        name:action.name,
        user_type:action.user_type
      }
    case authConstants.LOGIN_FAILURE:
      return {
        isLoading: false,
        loggedIn: false,
        loginErrors: action.error,
        user_type:'',
      }
    case authConstants.LOGOUT:
      return {
        isLoading: false,
        loggedIn: false,
        name: null,
        user_type:'',
      }
    case authConstants.CHECK_TOKEN_REQUEST:
      return {
        checkingToken: true,
        isLoading:true,
        loggedIn:false,
      }
    case authConstants.CHECK_TOKEN_SUCCESS:
      return {
        checkingToken: false,
        isLoading:false,
        tokenErrors: action.error,
        loggedIn: true,
        name:action.name,
        user_type:action.user_type,
      }
    case authConstants.CHECK_TOKEN_FAILURE:
      return {
        checkingToken: false,
        isLoading:false,
        tokenErrors:action.error,
        loggedIn:false,
        loginErrors:[],
        user_type:''
      }


    default:
      return state
  }
}

export default authentication
