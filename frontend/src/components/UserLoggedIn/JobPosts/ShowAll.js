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
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import ButtonBase from '@material-ui/core/ButtonBase'
import Ink from 'react-ink'

export default class ShowAllPostsComponent extends Component {
	constructor(props) {
		super(props)
		props.getAllPosts()
		this.showJobPostDialog = this.showJobPostDialog.bind(this)
		this.closeJobPostDialog = this.closeJobPostDialog.bind(this)
		this.closeDialog = this.closeDialog.bind(this)
		this.savePost = this.savePost.bind(this)
		this.state={
			dialogJobPostOpen:false,
			dialogContent:{},
			style:{
				ripple: "ripple",
			}
		}
	}
	showJobPostDialog(content,e) {
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
		const {allJobPosts,errors} = this.props
		const {dialogContent} = this.state
		return(
			<div className="all-job-posts">
			{errors
				?<Errors errors={errors}/>
				:null}
			
			<Table>
	        <TableHead>
	          <TableRow>
	            <TableCell>Position</TableCell>
	            <TableCell numeric>Company Name</TableCell>
	          </TableRow>
	        </TableHead>
			 <TableBody>
			{allJobPosts.map((content, key)=>
				
				<TableRow hover
				className="ripple"
				key={key}
				onClick={(e)=>this.showJobPostDialog(content,e)
				}>
				<Ink />
				<TableCell component="th" scope="row"> {content.title} </TableCell>
				<TableCell numeric>{content.companyName}</TableCell>
				</TableRow>
				)}
			</TableBody>
		</Table>


			<Dialog onClose={this.handleClose} 
					aria-labelledby="simple-dialog-title"
					open={this.state.dialogJobPostOpen} 
					onClose={this.closeDialog}>
		        <Card >
		        <CardContent>
		          <Typography variant="headline">Position: {dialogContent.title}</Typography>
		      
		          <Typography variant="caption">Salary: {dialogContent.salary}</Typography>
		          <br/>
		          <Typography component="p">Description: <br/>{dialogContent.description}</Typography> 
		          </CardContent>
		          <CardActions>
		          <Button 
		          		onClick={()=>{this.savePost(dialogContent._id);this.closeJobPostDialog()}}
		          		color="primary" 
		          		size="small">Save Position</Button>
		        	</CardActions>
		        </Card>
		      </Dialog>
		</div>
	)
	}
}