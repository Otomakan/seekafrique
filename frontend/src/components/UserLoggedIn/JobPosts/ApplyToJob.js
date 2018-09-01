import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import propTypes from 'prop-types'
//Takes in a jobPost prop with all your nromal jobPost props
//As weel as userJobPostActions(uploadapplication, hanleApplicationStateChange),
//Uses the userJobPostReducer
export default class ApplyToJobComponent extends Component{
	constructor(props) {
	 	super(props)
		this.handleApplicationStateChange = this.handleApplicationStateChange.bind(this)
		console.log(props)
		//Sets the jobpost id to send to the server
		props.handleApplicationStateChange(
			{
				...this.props.jobApplication,
				jobPostId: this.props.jobPost._id.$oid
		})
		
	}
	handleApplicationStateChange(e){
		const target = e.target
		const val = target.value
		const name = target.name
		//Updating the redux store with new input value

		this.props.handleApplicationStateChange(
			{
			...this.props.jobApplication,
			[name]: val
		}
		)
	}

	render(){
		const {jobApplication, jobPost} = this.props
		return(
		<div>	
		<Card>
		      <CardContent>
		          <Typography variant="headline">Position: {jobPost.title}</Typography>
		      
		          <Typography variant="caption">Salary: {jobPost.salary}</Typography>
		          <br/>
		          <Typography component="p">Description: <br/>{jobPost.description}</Typography> 
		          <form>
						<TextField 
								  id="coverLetter"
						          label="Cover Letter"
						          name="coverLetter"
						          className="text-field"
						          value={jobApplication.coverLetter}
						          onChange={this.handleApplicationStateChange}
						          margin="normal"
						          />
						 <Button 
						 	onClick={()=>{
						 		console.log(jobApplication)
						 		this.props.uploadApplication({jobApplication})
						 		}}
						 		>Upload Cover Letter</Button>
				</form>
		          </CardContent>
			
		</Card>
		</div>
		)
	}
}