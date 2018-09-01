import React,{Component} from 'react'
import Errors from '../../Errors.js'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import CircularProgress from '@material-ui/core/CircularProgress'

export default class ShowAllPostsComponent extends Component {
	constructor(props) {
		super(props)
		props.showAllOwnApplications()
		this.showJobPostDialog = this.showJobPostDialog.bind(this)
		this.closeJobPostDialog = this.closeJobPostDialog.bind(this)
		this.closeDialog = this.closeDialog.bind(this)
		this.savePost = this.savePost.bind(this)
		this.state={
			dialogJobPostOpen:false,
			dialogContent:{},
		}
	}
	showJobPostDialog(content) {
		this.setState({
			dialogJobPostOpen:true,
			dialogContent:content
		})
	}
	closeJobPostDialog(){
		this.setState({
			dialogJobPostOpen:false
		})
	}
	closeDialog(){
		this.setState({
			dialogJobPostOpen:false
		})
	}
	savePost(postId){
		this.props.savePost(postId.$oid)
	}
	render(){
		const {allOwnApplications,errors,mainLoading} = this.props
		const {dialogContent} = this.state
		return(
			<div className="all-job-posts">

			{
			mainLoading?
			<CircularProgress/>
			:errors
			? <Errors errors={errors}/>
			: allOwnApplications
			? <div>
			<List>
			{allOwnApplications.map((content, key)=>
				<ListItem button 
				onClick={()=>this.showJobPostDialog(content)
				}
				key={key}>{content.title} Status {content.status}
				</ListItem>
				)}
			</List>
			<Dialog onClose={this.handleClose} 
					aria-labelledby="simple-dialog-title"
					open={this.state.dialogJobPostOpen} 
					onClose={this.closeDialog}>
		        <Card className="dialog-card">
		        <CardContent>
		          <Typography variant="headline">Position: {dialogContent.title}</Typography>
		      
		          <Typography variant="caption">Salary: {dialogContent.salary}</Typography>
		          <br/>
		          <Typography component="p">Cover Letter: <br/>{dialogContent.coverLetter}</Typography> 
		          
		          <Typography component="p">Description: <br/>{dialogContent.description}</Typography> 
		          </CardContent>
		          <CardActions>
		          <Button 
		          		onClick={()=>{this.closeDialog()}}
		          		color="primary" 
		          		size="small">Close</Button>
		        	</CardActions>
		        </Card>
		      </Dialog>
		      </div>
		      : <p>No Jobs Applied to yet</p>
		  }
		</div>

	)
	}
}