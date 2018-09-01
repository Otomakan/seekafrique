import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

export default class PersonalInfo extends Component {

render(){
	const {pinfo}=this.props
	return pinfo ?
		<Card>
			<List>
				<ListItem button>First Name {pinfo.firstName}</ListItem>
				<ListItem button>Last Name {pinfo.lastName}</ListItem>
				<ListItem button>Phone Number {pinfo.phoneNumber}</ListItem>
				<ListItem button>Birthday: {pinfo.birthday}</ListItem>
				<br/>
				{pinfo.address?
				<div>
				<ListItem button>Address Line {pinfo.address.addressLine}</ListItem>
				<ListItem button>ZipCode {pinfo.address.zipcode}</ListItem>
				<ListItem button>Region {pinfo.address.region}</ListItem>
				<ListItem button>Country: {pinfo.address.country}</ListItem>
				<ListItem button>City: {pinfo.address.city}</ListItem>
				</div>
				: null
				}
				
			
			</List>
		</Card>
	: <h3>Hmm seems like you haven't built your profile yet </h3>
}
}