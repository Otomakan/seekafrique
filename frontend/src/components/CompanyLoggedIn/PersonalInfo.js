import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import propTypes from 'prop-types'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DatePicker from 'material-ui-pickers/DatePicker'


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
			// country:"",
		},
	  	errors:[],
	  }
	  this.handleInputChange = this.handleInputChange.bind(this)
	  this.handleBirthdayChange = this.handleBirthdayChange.bind(this)
	  this.handleAddChange = this.handleAddChange.bind(this)
	
	}

	handleInputChange(e){
		const target = e.target
		const val = target.value
		const name = target.name
		this.setState({
			[name]: val,
		})
	}
	handleAddChange(e){
		const target = e.target
		const val = target.value
		const name = target.name
		this.setState({
			address:{
				...this.state.address,
				[name]: val,
			}
		})
	}
	handleBirthdayChange(date) {
    	this.setState({ birthday: date })
  	}

	render(){
		let {firstName, lastName, phoneNumber, birthday,address} = this.state
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
		     <DatePicker 
			   		keyboard
	           		format="DD/MM/YYYY"
	           		mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
	           		disableOpenOnEnter
			   		label="Birthday"
			   		name="birthday"
			        value={birthday}
			        onChange={this.handleBirthdayChange}
			        />
			<TextField 
				id="addressLine"
		        label="Address Line"
		        name="addressLine"
		        className="text-field"
		        onChange={this.handleAddChange}
		        margin="normal"
		       />
		       <TextField 
				id="zipcode"
		        label="Zip Code"
		        name="zipcode"
		        className="text-field"
		        onChange={this.handleAddChange}
		        margin="normal"
		       />
		       <TextField 
				id="region"
		        label="Region"
		        name="region"
		        className="text-field"
		        onChange={this.handleAddChange}
		        margin="normal"
		       />
		       <TextField 
				id="city"
		        label="City"
		        name="city"
		        className="text-field"
		        onChange={this.handleAddChange}
		        margin="normal"
		       />
		       


			<Button  onClick={()=>{this.props.uploadPinfo({
				user_profile:{
					firstName,
			 		lastName,
			 		phoneNumber,
			 		birthday,
			 		address}})}}> Upload! </Button>	
		</form>
		</Card>
		</div>
		)
	}
}

PersonalInfo.propTypes = {
	uploadPinfo: propTypes.func.isRequired
}

//Error component checks if there is a loginErrors object and if so checks if its opulated array
const Errors = (props) =>
	props.loginErrors
	?
		props.loginErrors.length>0
		? <h3> {props.loginErrors}</h3>
		: null
	:null

