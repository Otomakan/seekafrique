
import ShowAllOwnApplicationsComponent from '../../../components/UserLoggedIn/JobPosts/ShowAllOwnApplications.js'
import {connect} from 'react-redux'
import userJobPostsActions from '../../../actions/userJobPostsActions.js'

function mapDispatchToProps(dispatch){
	return {
		showAllOwnApplications:()=>{
			dispatch(userJobPostsActions.showAllOwnApplications())
		},
	}
}
function mapStateToProps(state){
	return state.userJobPostsReducer
}

const ShowAllOwnApplications = connect(mapStateToProps, mapDispatchToProps)(ShowAllOwnApplicationsComponent)
export default ShowAllOwnApplications

