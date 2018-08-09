import React, {Component} from 'react'
import LogInForm from '../LogIn/LogInForm.js'

class Home extends Component {
	render(){
		return (
		<div className="home-container">
			<h1>
				Welcome to the Home Page
			</h1>
			<h3>Feel free to Login here</h3>
			<LogInForm/>

		</div>
		)
	}
}

export default Home