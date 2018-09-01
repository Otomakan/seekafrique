import ShowAllApplicationsComponent from '../../../components/CompanyLoggedIn/JobPosts/ShowAllApplications.js'
import {connect} from 'react-redux'
import companyJobPostsActions from '../../../actions/companyJobPostsActions.js'

function mapDispatchToProps(dispatch){
	return {
		showAllApplications:(jobPostId)=>{
			dispatch(companyJobPostsActions.showAllApplications(jobPostId))
		},
		changeApplicationStatus:(applicationId, newState,key)=>{
			dispatch(companyJobPostsActions.changeApplicationStatus(applicationId, newState,key))
		},
	}
}
function mapStateToProps(state){
	return state.companyJobPostsReducer
}

const ShowAllApplications = connect(mapStateToProps, mapDispatchToProps)(ShowAllApplicationsComponent)
export default ShowAllApplications

