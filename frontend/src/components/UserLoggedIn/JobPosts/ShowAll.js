import React,{Component} from 'react'
import Errors from '../../Errors.js'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class ShowAllPostsComponent extends Component {
	constructor(props) {
		super(props)
		props.getAllPosts()
		this.showJobPostDialog = this.showJobPostDialog.bind(this)
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
	closeDialog(){
		this.setState({
			dialogJobPostOpen:false
		})
	}
	savePost(postId){
		console.log(postId)
		this.props.savePost(postId.$oid)
	}
	render(){
		const {allJobPosts,errors} = this.props
		const {dialogContent} = this.state
		return(
			<div className="all-job-posts">
			{errors
				?<Errors errors={errors}/>
				:null}
			
			<List>
			{allJobPosts.map((content, key)=>
				<ListItem button 
				onClick={()=>this.showJobPostDialog(content)
				}
				key={key}>{content.title}
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
		          <Typography component="p">Description: <br/>{dialogContent.description}</Typography> 
		          </CardContent>
		          <CardActions>
		          <Button 
		          		onClick={()=>{this.savePost(dialogContent._id)}}
		          		color="primary" 
		          		size="small">Save Position</Button>
		        	</CardActions>
		        </Card>
		      </Dialog>
		</div>
	)
	}
}