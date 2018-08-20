import ShowProfile from '../../../components/CompanyLoggedIn/ShowProfile.js'
import {connect} from 'react-redux'
import companyActions from '../../../actions/userActions.js'

function mapDispatchToProps(dispatch){
	return {
		getProfile:()=>{
			dispatch(companyActions.getProfile())
		}
	}
}
function mapStateToProps(state){
	console.log(state.companyReducer)
	return state.companyReducer
}

const UserProfile = connect(mapStateToProps, mapDispatchToProps)(ShowProfile)
export default UserProfile