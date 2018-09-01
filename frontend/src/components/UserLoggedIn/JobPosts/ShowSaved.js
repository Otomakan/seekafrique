import React,{Component} from 'react'
import Errors from '../../Errors.js'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import JobPostCard from '../../CrossAssets/JobPostCard'
import ApplyToJob from './ApplyToJob'
// In the show save posts component we give the user the option to apply 
// to  position. So if dialogState==0 we see the saved post
//If dialogstate=1 we switch to a an "apply page"
export default class ShowSavedPostsComponent extends Component {
	constructor(props) {
		super(props)
		props.getSavedPosts()
		this.showJobPostDialog = this.showJobPostDialog.bind(this)
		this.closeDialog = this.closeDialog.bind(this)
		this.unsavePost = this.unsavePost.bind(this)
		this.changeDialogState = this.changeDialogState.bind(this)
		
		this.state={
			dialogJobPostOpen:false,
			dialogContent:{},
			dialogState:0,
		}
	}
	showJobPostDialog(content) {
		this.setState({
			dialogJobPostOpen:true,
			dialogContent:content
		})
	}
	closeDialog(){
		this.setState({
			dialogJobPostOpen:false
		})
	}
	changeDialogState(num){
		this.setState({
			dialogState: num
		})
	}
	unsavePost(postId){
		this.props.unsavePost(postId.$oid)
	}
	render(){
		const {savedJobPosts,errors} = this.props
		const {dialogContent} = this.state
		return(
			<div className="all-job-posts">
			{errors
				?<Errors errors={errors}/>
				:null}
			
			<List>
			{
			savedJobPosts
			? savedJobPosts.map((content, key)=>
			<ListItem button 
			onClick={()=>this.showJobPostDialog(content)
			}
			key={key}>{content.title}
			</ListItem>
			)
			: <p> No saved Posts</p>
			}
			</List>
			<Dialog onClose={this.handleClose} 
					aria-labelledby="simple-dialog-title"
					open={this.state.dialogJobPostOpen} 
					onClose={this.closeDialog}>
		        {this.state.dialogState 
		        	? <ApplyToJob {...this.props} jobPost={dialogContent}/>
		        	: <JobPostCard jobPost={dialogContent} 
		        		buttons={
		        			[{
		        				buttonName:'UNSAVE POSITION',
		        				buttonFunction:()=>{
									this.unsavePost(dialogContent._id)
									this.closeDialog()
							}},
							{
								buttonName:'APPLY',
								buttonFunction:()=>{
									this.changeDialogState(1)
								}
							}]
		        		}/>
		      	}
		      </Dialog>
		</div>
	)
	}
}