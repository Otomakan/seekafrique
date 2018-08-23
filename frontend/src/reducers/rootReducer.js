import { combineReducers } from 'redux'
import authReducer from './authReducer'
import navBarReducer from './NavBarReducer'
import buildProfileReducer from './buildProfileReducer'
import signupReducer from './signupReducers'
import userReducer from './userReducer'
import companyBuildProfileReducer from './companyBuildProfileReducer'
import companyReducer from './companyReducer'
import companyJobPostsReducer from './companyJobPostsReducer'
export default  combineReducers({
	authReducer,
	userReducer,
	navBarReducer,
	buildProfileReducer,
	signupReducer,
	companyBuildProfileReducer,
	companyReducer,
	companyJobPostsReducer,
})