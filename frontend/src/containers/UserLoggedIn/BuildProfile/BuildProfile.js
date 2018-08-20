import PersonalInfoComp from '../../../components/BuildProfile/BuildProfile.js'
import {connect} from 'react-redux'
import buildProfileActions from '../../../actions/buildProfileActions.js'

function mapDispatchToProps(dispatch){
	return {
		uploadPinfo:(pinfo)=>{
			dispatch(buildProfileActions.uploadPInfo(pinfo))
		},
		uploadEdu:(edu)=>{
			dispatch(buildProfileActions.uploadEdu(edu))
		},
		uploadWork:(work)=>{
			dispatch(buildProfileActions.uploadWork(work))
	
		},
		addEdu:()=>{
			dispatch(buildProfileActions.addEdu())
		},
		removeEdu:(eduIndex)=>{
			console.log(eduIndex)
			dispatch(buildProfileActions.removeEdu(eduIndex))
		},
		handleEduStateChange:(index, eduState)=>{
			dispatch(buildProfileActions.handleEduStateChange(index, eduState))
		},
		handleWorkStateChange:(index, workState)=>{
			dispatch(buildProfileActions.handleWorkStateChange(index, workState))
		},
		addWork:()=>{
			dispatch(buildProfileActions.addWork())
		},
		removeWork:(wIndex)=>{
			dispatch(buildProfileActions.removeWork(wIndex))
		}
	}
}

function mapStateToProps(state){
	return state.buildProfileReducer
}

const PInfo = connect(mapStateToProps, mapDispatchToProps)(PersonalInfoComp)
export default PInfo