import BuildProfileComp from '../../../components/CompanyLoggedIn/BuildProfile.js'
import {connect} from 'react-redux'
import companyBuildProfileActions from '../../../actions/companyBuildProfileActions.js'

function mapDispatchToProps(dispatch){
	return {
		uploadBasicInfo:(binfo)=>{
			dispatch(companyBuildProfileActions.uploadBasicInfo(binfo))
		},
		changeBasicInfo:(binfo)=>{
			dispatch(companyBuildProfileActions.changeBasicInfo(binfo))
		}
		
	}
}

function mapStateToProps(state){
	return state.companyBuildProfileReducer
}

const BuildProfile = connect(mapStateToProps, mapDispatchToProps)(BuildProfileComp)
export default BuildProfile