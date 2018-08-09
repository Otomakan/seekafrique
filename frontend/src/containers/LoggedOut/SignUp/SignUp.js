import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import SignUpForm from '../../../components'

import {connect} from 'react-redux'
import signup from '../../../actions/signUpActions.js'



class SignUpComponent extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	  	name: "",
	  	email:"",
	  	password:"",
	  	response:""
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
		const {name, email, password} = this.state
		this.props.dispatch(signup(name, email, password))
	
	}
	render(){
		return (
			<form className="signup-form" onSubmit={this.handleSubmit}>
				<TextField 
					  id="name"
			          label="Name"
			          name="name"
			          value={this.state.name}
			          className='text-field'
			          onChange={this.handleInputChange}
			          margin="normal"
			          />
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
			        autoComplete="current-password"
			        name="password"
			        className="text-field"
			        onChange={this.handleInputChange}
			        margin="normal"
			       />
			    <Button onClick={this.handleSubmit.bind(this)}> Sign Up !</Button>
			</form>
		)
	}
}

function mapStateToProps(state) {
    return state

}
const SignUp = connect(mapStateToProps)(SignUpComponent)
export default SignUp
