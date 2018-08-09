import PersonalInfoComp from '../../../components/BuildProfile/PersonalInfo.js'
import {connect} from 'react-redux'
import buildProfileActions from '../../../actions/buildProfileActions.js'

function mapDispatchToProps(dispatch){
	return {
		upload:(pinfo)=>{
			dispatch(buildProfileActions.uploadPInfo(pinfo))
		},
	}
}
function mapStateToProps(state){
	console.log(state.buildProfileReducer)
	return state.buildProfileReducer
}

const PInfo = connect(mapStateToProps, mapDispatchToProps)(PersonalInfoComp)
export default PInfo