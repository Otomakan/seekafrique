
import ShowAllPostsComponent from '../../../components/UserLoggedIn/JobPosts/ShowAll.js'
import {connect} from 'react-redux'
import userJobPostsActions from '../../../actions/userJobPostsActions.js'

function mapDispatchToProps(dispatch){
	return {
		getAllPosts:()=>{
			dispatch(userJobPostsActions.getAllPosts())
		},
		savePost:(postId)=>{
			dispatch(userJobPostsActions.savePost(postId))
		},

	}
}
function mapStateToProps(state){
	return state.userJobPostsReducer
}

const ShowAllPosts = connect(mapStateToProps, mapDispatchToProps)(ShowAllPostsComponent)
export default ShowAllPosts

