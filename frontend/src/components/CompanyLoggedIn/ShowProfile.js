import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
export default class ShowProfile extends Component {
	constructor(props) {
	  super(props);
		this.props.getProfile()
		console.log(props)
		this.state={
			toSee: 0
		}
	}

	render(){
		let {toSee}=this.state
		return(
			<div>
			<h1>COMPANY PROFILE</h1>
			
			<Card>
			<List>
				<ListItem button>Company Name: {this.props.companyProfile.companyName}</ListItem>
				<ListItem button>Website: {this.props.companyProfile.website}</ListItem>
				<ListItem button>Description {this.props.companyProfile.description}</ListItem>
				<br/>
			</List> 
			</Card>
			</div>
			)
		}
	}