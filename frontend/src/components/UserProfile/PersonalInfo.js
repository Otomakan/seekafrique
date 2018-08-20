import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

export default class PersonalInfo extends Component {

render(){
	return this.props.pinfo ?

		<Card>
			<List>
				<ListItem button>First Name {this.props.pinfo.firstName}</ListItem>
				<ListItem button>Last Name {this.props.pinfo.lastName}</ListItem>
				<ListItem button>Phone Number {this.props.pinfo.phoneNumber}</ListItem>
				<ListItem button>Birthday: {this.props.pinfo.birthday}</ListItem>
				<br/>
				<ListItem button>Address Line {this.props.pinfo.address.addressLine}</ListItem>
				<ListItem button>ZipCode {this.props.pinfo.address.zipcode}</ListItem>
				<ListItem button>Region {this.props.pinfo.address.region}</ListItem>
				<ListItem button>Country: {this.props.pinfo.address.country}</ListItem>
				<ListItem button>City: {this.props.pinfo.address.city}</ListItem>
			
			</List>
		</Card>
	: <h3>Hmm seems like you haven't built your profile yet </h3>
}
}