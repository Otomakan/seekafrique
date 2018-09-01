
import ShowSavedPostsComponent from '../../../components/UserLoggedIn/JobPosts/ShowSaved.js'
import {connect} from 'react-redux'
import userJobPostsActions from '../../../actions/userJobPostsActions.js'

function mapDispatchToProps(dispatch){
	return {
		getSavedPosts:()=>{
			dispatch(userJobPostsActions.getSavedPosts())
		},
		unsavePost:(postId)=>{
			dispatch(userJobPostsActions.unsavePost(postId))
		},
		uploadApplication:(jobApplication)=>{
			dispatch(userJobPostsActions.uploadApplication(jobApplication))
		},
		handleApplicationStateChange:(jobApplication)=>{
			dispatch(userJobPostsActions.handleApplicationStateChange(jobApplication))
		},

	}
}
function mapStateToProps(state){
	return state.userJobPostsReducer
}

const ShowSavedPosts = connect(mapStateToProps, mapDispatchToProps)(ShowSavedPostsComponent)
export default ShowSavedPosts

