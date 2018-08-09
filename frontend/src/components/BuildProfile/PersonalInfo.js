import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import propTypes from 'prop-types'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'


export default class PersonalInfo extends Component{
constructor(props) {
	  super(props)
	
	  this.state = {
	  	firstName:"",
	  	lastName:"",
	  	birthday: new Date(),
	  	phoneNumber: "",
	  	languages:[],
	  	address:{
	  		addressLine: "",
  			zipcode: "",
  			region: "",
			city: "",
		},
	  	errors:[],
	  }
	  this.handleInputChange = this.handleInputChange.bind(this)
	  console.log("In the Login page")
	  console.log(props)
	}

	handleInputChange(e){
		const target = e.target
		const val = target.value
		const name = target.name
		this.setState({
			[name]: val,
		})
	}

	render(){
		let {firstName, lastName, phoneNumber} = this.state
		return (
		<div>
		<Card>
			<Errors loginErrors={this.props.loginErrors}/>
			<form>
			<TextField 
					  id="firstName"
			          label="First Name"
			          name="firstName"
			          className="text-field"
			          onChange={this.handleInputChange}
			          margin="normal"
			          />
			          <br/>
			          <br/>
			<TextField 
					id="lastName"
			        label="Last Name"
			        name="lastName"
			        className="text-field"
			        onChange={this.handleInputChange}
			        margin="normal"
			       />
			<TextField 
				id="phoneNumber"
		        label="Phone Number"
		        name="phoneNumber"
		        className="text-field"
		        onChange={this.handleInputChange}
		        margin="normal"
		       />


			<Button  onClick={()=>{this.props.upload({
				user_profile:{
					firstName,
			 		lastName,
			 		phoneNumber}})}}> Upload! </Button>	
		</form>
		</Card>
		</div>
		)
	}
}

PersonalInfo.propTypes = {
	loginErrors: propTypes.array,
	upload: propTypes.func.isRequired
}

//Error component checks if there is a loginErrors object and if so checks if its opulated array
const Errors = (props) =>
	props.loginErrors
	?
		props.loginErrors.length>0
		? <h3> {props.loginErrors}</h3>
		: null
	:null

