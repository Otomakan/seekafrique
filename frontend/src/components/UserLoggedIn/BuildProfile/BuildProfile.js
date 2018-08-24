import React,{Component} from 'react'
import propTypes from 'prop-types'
import Education from './Education'
import PersonalInfo from './PersonalInfo'
import WorkHistory from './WorkHistory'


export default class BuildProfile extends Component{

	render(){
		return this.props.step === 1
		? <PersonalInfo {...this.props}/>
		: this.props.step === 2
		? <Education {...this.props}/>
		: this.props.step ===3
		? <WorkHistory {...this.props}/>
		: <h1> Last state</h1>
		
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

