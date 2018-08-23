import React,{Component} from 'react' 
export default class Errors extends Component{
	render(){
		return (
	this.props.errors
	?
		this.props.errors.length>0
		? <h3> {this.props.errors}</h3>
		: null
	:null)
	}
} 