import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import propTypes from 'prop-types'
import DatePicker from 'material-ui-pickers/DatePicker'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'

export default class EducationBlock extends Component{
constructor(props) {
	  super(props)

	  this.handleInputChange = this.handleInputChange.bind(this)
	   this.handleStartDateChange = this.handleStartDateChange.bind(this)
	   this.handleEndDateChange = this.handleEndDateChange.bind(this)
	this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this)
}

	handleStartDateChange(date){
    	this.props.handleEduStateChange(this.props.eduIndex, 
		{...this.props.eduProfile,
			startDate:date
			})
  	}
  	handleEndDateChange(date){
	this.props.handleEduStateChange(this.props.eduIndex, 
		{...this.props.eduProfile,
			endDate:date
		})

  	}
	handleInputChange(e){
		const target = e.target
		const val = target.value
		const name = target.name
		//Updating the redux store with new input value

			this.props.handleEduStateChange(this.props.eduIndex, 
				{...this.props.eduProfile,
				[name]: val})
		}
  	handleCheckBoxChange (name,e) {
		this.props.handleEduStateChange(this.props.eduIndex, {
			...this.props.jobProfile,
			[name]: !this.props.currentlyStudying
		})
  	}

	render(){
		let {startDate, endDate,tempInstitution, degreeName, currentlyStudying} = this.props.eduProfile
		return (
		<div>
		<Card>
			<form>
			<TextField 
					  id="degreeName"
			          label="Degree Name"
			          name="degreeName"
			          className="text-field"
			          value={degreeName}
			          onChange={this.handleInputChange}
			          margin="normal"
			          />
			          <br/>
			          <br/>
			<TextField 
					id="tempInstitution"
			        label="Institution"
			        name="tempInstitution"
			        value={tempInstitution}
			        className="text-field"
			        onChange={this.handleInputChange}
			        margin="normal"
			       />

			          <br/>
			          <br/>
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

			<FormControlLabel
          control={
            <Checkbox
              checked={currentlyStudying}
              onChange={(e)=>{this.handleCheckBoxChange('currentlyStudying',e)}}
              value="currentlyStudying"
            />
          }
          label="Currently Studying here"
        />

			<Button 
				onClick={()=>{
					this.props.removeEdu(this.props.eduIndex)
				}}
			>Remove Edu</Button>
		</form>
		</Card>
		</div>
		)
	}
}

//Error component checks if there is a loginErrors object and if so checks if its opulated array
const Errors = (props) => 
	props.loginErrors
	?
		props.loginErrors.length>0
		? <h3> {props.loginErrors}</h3>
		: null
	:null