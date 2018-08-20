import React,{Component} from 'react'
import propTypes from 'prop-types'
import BasicInfo from './BasicInfo'


export default class BuildProfile extends Component{

	render(){
		return <BasicInfo {...this.props}/>
		
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

