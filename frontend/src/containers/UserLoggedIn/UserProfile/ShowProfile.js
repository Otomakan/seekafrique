import ShowProfile from '../../../components/UserLoggedIn/UserProfile/ShowProfile.js'
import {connect} from 'react-redux'
import userActions from '../../../actions/userActions.js'

function mapDispatchToProps(dispatch){
	return {
		getProfile:()=>{
			dispatch(userActions.getProfile())
		}
	}
}
function mapStateToProps(state){
	console.log(state.userReducer)
	return state.userReducer
}

const UserProfile = connect(mapStateToProps, mapDispatchToProps)(ShowProfile)
export default UserProfile