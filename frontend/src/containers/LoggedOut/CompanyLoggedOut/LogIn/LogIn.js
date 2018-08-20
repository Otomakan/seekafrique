import React,{Component} from 'react'
import LogInForm from './LogInForm.js'

class CompanyLogIn extends Component{
	render(){
		return(
			<div className="login-page-container">
				<h1> Welcome to the Log In Page!</h1>
				<LogInForm/>
			</div>)
	}
}

export default CompanyLogIn