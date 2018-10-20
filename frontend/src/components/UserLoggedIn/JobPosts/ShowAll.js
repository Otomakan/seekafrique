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
import JobPostCard from '../../CrossAssets/JobPostCard'
import ApplyToJob from './ApplyToJob'



export default class ShowAllPostsComponent extends Component {
	constructor(props) {
		super(props)
		props.getAllPosts()
		this.showJobPostDialog = this.showJobPostDialog.bind(this)
		this.closeDialog = this.closeDialog.bind(this)
		this.savePost = this.savePost.bind(this)
		this.unsavePost = this.unsavePost.bind(this)
		this.changeDialogState = this.changeDialogState.bind(this)
		this.setDialogButtons = this.setDialogButtons.bind(this)
		this.state={
			dialogJobPostOpen:false,
			dialogContent:{},
			dialogState: 0,
			dialogButtons:[],	
		}
	}
	showJobPostDialog(content,key) {
		this.setState({
			dialogJobPostOpen:true,
			dialogContent:content
		})
		this.setDialogButtons(content.applied, content.saved, content._id,key)
	}

	closeDialog(){
		this.props.uploadApplicationReset()
		this.setState({
			dialogState:0,
			dialogJobPostOpen:false
		})
	}
	setDialogButtons(applied, saved,dialogContentId,key){
		console.log(key)
		let saveButton = {
			buttonName:'SAVE POSITION',
			buttonFunction:()=>{
				this.savePost(dialogContentId, key)
				this.closeDialog()
		}}
		let savedButton = {
			buttonName:'UNSAVE',
			buttonFunction:()=>{
				this.unsavePost(dialogContentId, key)
				this.closeDialog()
		}}

		let appliedButton = {
			buttonName:'APPLIED',
			disabled:true
		}
		let applyButton = {
			buttonName:'APPLY',
			buttonFunction:()=>{
				this.changeDialogState()
			}
		}
		if (applied && saved)
			this.setState(prevState =>{
				return {dialogButtons:[appliedButton, savedButton]}
			})
		
		else if (!applied&&!saved)
			this.setState(prevState =>{
				return {dialogButtons:[applyButton, saveButton]}
			})
		else if (applied===true && saved===false)
			this.setState(prevState =>{
				return {dialogButtons:[appliedButton, saveButton]}
			})
		else if (applied===false && saved===true)
			this.setState(prevState =>{
				return {dialogButtons:[applyButton, savedButton]}
		})

		console.log(...this.state.dialogButtons)
	}
	savePost(postId,key){
		this.props.savePost(postId.$oid,key)
	}
	unsavePost(postId,key){
		this.props.unsavePost(postId.$oid,key)
	}
	changeDialogState(){
		this.setState({
			dialogState: !this.state.dialogState
		})
	}
	
	render(){
		const {allJobPosts,errors} = this.props
		const {dialogContent} = this.state

		return(
		<div className="all-job-posts">
			{errors
				?<Errors errors={errors}/>
				:null}
			{allJobPosts
			? <Table>
	        <TableHead>
	          <TableRow>
	            <TableCell>Position</TableCell>
	            <TableCell numeric>Company Name</TableCell>
	            <TableCell> Country</TableCell>
	          </TableRow>
	        </TableHead>
			 <TableBody>
			{allJobPosts.map((content, key)=>{
				let tableRowStyle = content.applied 
				? {  
					borderWidth: 1,
					borderColor: '#999999',
					borderStyle: 'solid',
					backgroundColor: '#cccccc',
					color: '#666666'
				}
				: content.saved ? {
					borderWidth: 1,
					borderColor: '#999999',
					borderStyle: 'solid',
					backgroundColor: 'green',
					color: '#666666'
				}
				:null
		
				return <TableRow 
				hover
				key={key}
				style={tableRowStyle}
				onClick={()=>this.showJobPostDialog(content,key)
				}>
				<TableCell component="th" scope="row"> {content.title} </TableCell>
				<TableCell  numeric>{content.companyName}</TableCell>
				</TableRow>
				}
				)}
			
			</TableBody>
			</Table>
			: <h3>Loading</h3>
			}
			


			<Dialog onClose={this.handleClose} 
					aria-labelledby="simple-dialog-title"
					open={this.state.dialogJobPostOpen} 
					onClose={this.closeDialog}>
				{this.state.dialogState 
		        ? <ApplyToJob {...this.props} jobPost={dialogContent}/>
		        : <JobPostCard jobPost={dialogContent} 
		        		buttons={this.state.dialogButtons}
		        		/>
		 		}
		      </Dialog>
		</div>
	)
	}
}