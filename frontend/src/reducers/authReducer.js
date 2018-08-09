import { userConstants } from '../actions/userActions.js';

// const initialState = token ? { loggedIn: true, user } : {};
 
function authentication(state = {loggedIn:false,isLoading:true, name:null, loginErrors:[]}, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        isLoading: true,
        loggedIn:false,
      }
    case userConstants.LOGIN_SUCCESS:
      return {
        isLoading: false,
        loggedIn: true,
        name:action.name,
      }
    case userConstants.LOGIN_FAILURE:
      return {
        isLoading: false,
        loggedIn: false,
        loginErrors: action.error,
      }
    case userConstants.LOGOUT:
      return {
        isLoading: false,
        loggedIn: false,
        name: null,
      }
    case userConstants.CHECK_TOKEN_REQUEST:
      return {
        checkingToken: true,
        isLoading:true,
        loggedIn:false,
      }
    case userConstants.CHECK_TOKEN_SUCCESS:
      return {
        checkingToken: false,
        isLoading:false,
        tokenErrors: action.error,
        loggedIn: true,
        name:action.name,
      }
    case userConstants.CHECK_TOKEN_FAILURE:
      return {
        checkingToken: false,
        isLoading:false,
        tokenErrors:action.error,
        loggedIn:false,
        loginErrors:[],
      }


    default:
      return state
  }
}

export default authentication
