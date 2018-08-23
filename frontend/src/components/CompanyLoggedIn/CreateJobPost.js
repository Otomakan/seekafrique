import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Errors from '../../components/Errors.js'
import DatePicker from 'material-ui-pickers/DatePicker'

export default class CreateJobPost extends Component {
	constructor(props) {
		super(props)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleStartDateChange = this.handleStartDateChange.bind(this)
	}

	handleStartDateChange(date){
		this.props.handleInputChange(
			{
				...this.props.jobPost,
				startDate: date 
			}
		)
  	}
	handleInputChange(e){
		const target = e.target
		const val = target.value
		const name = target.name

		this.props.handleInputChange({
			...this.props.jobPost,
			[name]:val
		})
		
	}

	render(){
		const {title, description, salary, startDate} = this.props.jobPost
		return(
			<Card>
			<Errors errors={this.props.errors}/>
			<form>
			<TextField 
					  id="title"
			          label="Title"
			          name="title"
			          className="text-field"
			          value={title}
			          onChange={this.handleInputChange}
			          margin="normal"
			          />
			          <br/>
			          <br/>
			<TextField 
					id="description"
			        label="Job Description"
			        name="description"
			        className="text-field"
			        value={description}
			        onChange={this.handleInputChange}
			        margin="normal"
			       />
			<TextField 
				id="salary"
		        label="Salary"
		        name="salary"
		        className="text-field"
		        value={salary}
		        onChange={this.handleInputChange}
		        margin="normal"
		       />
		       <DatePicker 
		       		keyboard
	           		format="DD/MM/YYYY"
	           		mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
	           		disableOpenOnEnter
			  		label="Start Date"
			  		name="startDate"
			        value={startDate}
			        onChange={this.handleStartDateChange}
			        />

			        <Button onClick={()=>{
			        	this.props.uploadJobPost(this.props.jobPost)
			        }}>CREATE  JOBPOST</Button>

			
		</form>
		</Card>)
	}
}