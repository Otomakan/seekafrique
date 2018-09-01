
import ApplyToJobComponent from '../../../components/UserLoggedIn/JobPosts/ApplyToJob.js'
import {connect} from 'react-redux'
import userJobPostsActions from '../../../actions/userJobPostsActions.js'



function mapDispatchToProps(dispatch){
	return {
		uploadApplication:(jobApplication)=>{
			dispatch(userJobPostsActions.getAllPosts(jobApplication))
		},
		handleApplicationStateChange:(jobApplication)=>{
			dispatch(userJobPostsActions.handleApplicationStateChange(jobApplication))
		},

	}
}
function mapStateToProps(state){
	return state.userJobPostsReducer
}

const ApplyToJob = connect(mapStateToProps, mapDispatchToProps)(ApplyToJobComponent)
export default ApplyToJob

