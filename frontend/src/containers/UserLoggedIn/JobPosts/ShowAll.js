
import ShowAllPostsComponent from '../../../components/UserLoggedIn/JobPosts/ShowAll.js'
import {connect} from 'react-redux'
import userJobPostsActions from '../../../actions/userJobPostsActions.js'

function mapDispatchToProps(dispatch){
	return {
		getAllPosts:()=>{
			dispatch(userJobPostsActions.getAllPosts())
		},
		savePost:(postId,key)=>{
			dispatch(userJobPostsActions.savePost(postId,key))
		},
		unsavePost:(postId,key)=>{
			dispatch(userJobPostsActions.unsavePost(postId,key))
		},
		uploadApplication:(jobApplication)=>{
			dispatch(userJobPostsActions.uploadApplication(jobApplication))
		},
		handleApplicationStateChange:(jobApplication)=>{
			dispatch(userJobPostsActions.handleApplicationStateChange(jobApplication))
		},
		uploadApplicationReset:()=>{
			dispatch(userJobPostsActions.uploadApplicationReset())
		}

	}
}
function mapStateToProps(state){
	return state.userJobPostsReducer
}

const ShowAllPosts = connect(mapStateToProps, mapDispatchToProps)(ShowAllPostsComponent)
export default ShowAllPosts

