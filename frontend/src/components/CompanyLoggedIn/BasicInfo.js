import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import propTypes from 'prop-types'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DatePicker from 'material-ui-pickers/DatePicker'


export default class BasicInfo extends Component{
constructor(props) {
	  super(props)
	

	 //  	address:{
	 //  		addressLine: "",
  // 			zipcode: "",
  // 			region: "",
		// 	city: "",
		// 	// country:"",
		// },
	  // }
	  this.uploadBasicInfo = this.uploadBasicInfo.bind(this)
	  this.handleInputChange = this.handleInputChange.bind(this)
	  // this.handleBirthdayChange = this.handleBirthdayChange.bind(this)
	  // this.handleAddChange = this.handleAddChange.bind(this)
	
	}

	handleInputChange(e){
		const target = e.target
		const val = target.value
		const name = target.name
		this.props.changeBasicInfo({
			...this.props.basicInfo,
			[name]: val,
		})
	}

	uploadBasicInfo(){
		this.props.uploadBasicInfo(this.props.basicInfo)
	}
	// handleAddChange(e){
	// 	const target = e.target
	// 	const val = target.value
	// 	const name = target.name
	// 	this.setState({
	// 		address:{
	// 			...this.state.address,
	// 			[name]: val,
	// 		}
	// 	})
	// }
	// handleBirthdayChange(date) {
 //    	this.setState({ birthday: date })
 //  	}

	render(){
		let {companyName, description, website} = this.props.basicInfo
		return (
		<div>
		<Card>
			<Errors loginErrors={this.props.errors}/>
			<form>
			<TextField 
					  id="companyName"
			          label="Company Name"
			          name="companyName"
			          className="text-field"
			          onChange={this.handleInputChange}
			          margin="normal"
			          />
			          <br/>
			          <br/>
			<TextField 
					id="website"
			        label="Website"
			        name="wesbite"
			        className="text-field"
			        onChange={this.handleInputChange}
			        margin="normal"
			       />
			<TextField 
				id="description"
		        label="Company Description"
		        name="description"
		        className="text-field"
		        onChange={this.handleInputChange}
		        margin="normal"
		       />
		     
		       


			<Button  onClick={()=>{
				this.props.uploadBasicInfo({
				company_profile:{
					description,
			 		companyName,
			 		website,
			 	}
			 })}}> Upload! </Button>	
		</form>
		</Card>
		</div>
		)
	}
}

// PersonalInfo.propTypes = {
// 	uploadPinfo: propTypes.func.isRequired
// }

//Error component checks if there is a loginErrors object and if so checks if its opulated array
const Errors = (props) =>
	props.loginErrors
	?
		props.loginErrors.length>0
		? <h3> {props.loginErrors}</h3>
		: null
	:null

