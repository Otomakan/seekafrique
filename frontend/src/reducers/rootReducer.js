import { combineReducers } from 'redux'
import authReducer from './authReducer'
import navBarReducer from './NavBarReducer'
import buildProfileReducer from './buildProfileReducer'

export default  combineReducers({
	authReducer,
	navBarReducer,
	buildProfileReducer,
})