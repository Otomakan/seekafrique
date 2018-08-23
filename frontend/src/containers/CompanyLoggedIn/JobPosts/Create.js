import CreateJobPostComponent from '../../../components/CompanyLoggedIn/CreateJobPost.js'
import {connect} from 'react-redux'
import companyJobPostsActions from '../../../actions/companyJobPostsActions.js'

function mapDispatchToProps(dispatch){
	return {
		handleInputChange:(jobPost)=>{
			dispatch(companyJobPostsActions.handleInputChange(jobPost))
		},
		uploadJobPost:(jobPost)=>{
			dispatch(companyJobPostsActions.uploadJobPost(jobPost))
		}
	}
}
function mapStateToProps(state){
	console.log(state.companyJobPostsActions)
	return state.companyJobPostsReducer
}

const CreateJobPost = connect(mapStateToProps, mapDispatchToProps)(CreateJobPostComponent)
export default CreateJobPost