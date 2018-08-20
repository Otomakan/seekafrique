import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import propTypes from 'prop-types'


export default class LoginForm extends Component{
constructor(props) {
	  super(props)
	
	  this.state = {
	  	email:"",
	  	password:"",
	  	token:"",
	  	errors:[],
	  }
	  this.handleInputChange = this.handleInputChange.bind(this)

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
		return (
		<div>
		<Card>
			<Errors loginErrors={this.props.loginErrors}/>
			<form>
			<TextField 
					  id="name"
			          label="Name"
			          name="name"
			          className="text-field"
			          onChange={this.handleInputChange}
			          margin="normal"
			          />
			          <br/>
			          <br/>
			<TextField 
					id="password-input"
			        label="Password"
			        type="password"
			        name="password"
			        autoComplete="current-password"
			        className="text-field"
			        onChange={this.handleInputChange}
			        margin="normal"
			       />
			<Button  onClick={()=>{this.props.authenticate(this.state.name, this.state.password)}}> Auth! </Button>	
		</form>
		</Card>
		</div>
		)
	}
}

LoginForm.propTypes = {
	loginErrors: propTypes.array,
	authenticate: propTypes.func.isRequired
}

//Error component checks if there is a loginErrors object and if so checks if its opulated array
const Errors = (props) =>
	props.loginErrors
	?
		props.loginErrors.length>0
		? <h3> {props.loginErrors}</h3>
		: null
	:null

