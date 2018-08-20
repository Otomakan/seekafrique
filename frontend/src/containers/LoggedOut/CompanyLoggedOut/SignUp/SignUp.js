import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
// import SignUpForm from '../../../components'

import {connect} from 'react-redux'
import signUpActions from '../../../../actions/signUpActions.js'



class SignUpComponent extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	  	email:"",
	  	password:"",
	  	subscription:"",
	  	password_confirmation:"",
	  };
	  this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange(e){
		const target = e.target
	    const value = target.value
	    const name = target.name
		this.setState({
			[name]: value,
		})
	}

	handleSubmit(){
		// const {subscription, email, password} = this.state
		console.log(this.state)
		this.props.dispatch(signUpActions.companySignup(this.state))
	}

	render(){
		const subscriptionTypes = ['free', 'classic','premium']
		return (
			<div className="signupDiv">
			<Errors signUpErrors={this.props.signUpErrors}/>
			<form className="signup-form" onSubmit={this.handleSubmit}>
			     <TextField
			     		id="email"
			     		label="Email"
			     		name="email"
			     		value={this.state.email}
			     		className='text-field'
			     		onChange={this.handleInputChange}
			     		/>

				<TextField 
					id="password-input"
			        label="Password"
			        type="password"
			        name="password"
			        className="text-field"
			        onChange={this.handleInputChange}
			        margin="normal"
			       />
			       <TextField 
					id="password-confirmation-input"
			        label="Password Confirmation"
			        type="password"
			        name="password_confirmation"
			        className="text-field"
			        onChange={this.handleInputChange}
			        margin="normal"
			       />

					        <TextField
		          id="select-subscription"
		          select
		          label="Select"
		          name="subscription"
		          value={this.state.subscription}
		          onChange={this.handleInputChange}
		          helperText="Please select your subscription type"
		          margin="normal"
		        >
		          {subscriptionTypes.map(option => (
		            <MenuItem key={option} value={option}>
		              {option}
		            </MenuItem>
		          ))}
      		  </TextField>
			    <Button onClick={this.handleSubmit.bind(this)}> Sign Up !</Button>
			</form>
			</div>
		)
	}
}

const Errors = (props) =>
	props.signUpErrors
	?
		props.signUpErrors.length>0
		? <h3> {props.signUpErrors}</h3>
		: null
	:null

function mapStateToProps(state) {
	console.log(state)
    return state.signupReducer

}
const SignUp = connect(mapStateToProps)(SignUpComponent)
export default SignUp
