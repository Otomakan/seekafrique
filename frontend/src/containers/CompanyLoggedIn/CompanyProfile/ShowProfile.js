import ShowProfile from '../../../components/CompanyLoggedIn/ShowProfile.js'
import {connect} from 'react-redux'
import companyActions from '../../../actions/companyActions.js'

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

const CompanyProfile = connect(mapStateToProps, mapDispatchToProps)(ShowProfile)
export default CompanyProfile