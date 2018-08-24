import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import propTypes from 'prop-types'
import DatePicker from 'material-ui-pickers/DatePicker'

export default class WorkBlock extends Component{
constructor(props) {
	  super(props)

	this.handleInputChange = this.handleInputChange.bind(this)
	this.handleStartDateChange = this.handleStartDateChange.bind(this)
	this.handleEndDateChange = this.handleEndDateChange.bind(this)

	}

	handleInputChange(e){
		const target = e.target
		const val = target.value
		const name = target.name

		this.props.handleWorkStateChange(this.props.wIndex, {
			...this.props.jobProfile,
			[name]:val
		})
		
	}
	handleStartDateChange(date){
			this.props.handleWorkStateChange(this.props.wIndex, 
				{...this.props.jobProfile,
					endDate: date })

  	}
  	handleEndDateChange(date){
			this.props.handleWorkStateChange(this.props.wIndex, {
				...this.props.jobProfile,	
				startDate: date 
			})

  	}
	render(){
		let {company, jobTitle, startDate, endDate, companyWebsite} = this.props.jobProfile
		return (
		<div>
		<Card>
			<Errors loginErrors={this.props.loginErrors}/>
			<form>
			<TextField 
					  id="company"
			          label="Company Name"
			          name="company"
			          className="text-field"
			          value={company}
			          onChange={this.handleInputChange}
			          margin="normal"
			          />
			          <br/>
			          <br/>
			<TextField 
					id="job-title"
			        label="Job Title"
			        name="jobTitle"
			        className="text-field"
			        value={jobTitle}
			        onChange={this.handleInputChange}
			        margin="normal"
			       />
			<TextField 
				id="company-website"
		        label="Company Website"
		        name="companyWebsite"
		        className="text-field"
		        value={companyWebsite}
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
			   <DatePicker 
			   		keyboard
	           		format="DD/MM/YYYY"
	           		mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
	           		disableOpenOnEnter
			   		label="End Date"
			   		name="endDate"
			        value={endDate}
			        onChange={this.handleEndDateChange}
			        />
			        <Button onClick={()=>{
			        	this.props.removeWork(this.props.wIndex)
			        }}>Remove Work</Button>

			
		</form>
		</Card>
		</div>
		)
	}
}

WorkBlock.propTypes = {
	loginErrors: propTypes.array,
	uploadWork: propTypes.func.isRequired
}

//Error component checks if there is a loginErrors object and if so checks if its opulated array
const Errors = (props) =>
	props.loginErrors
	?
		props.loginErrors.length>0
		? <h3> {props.loginErrors}</h3>
		: null
	:null

