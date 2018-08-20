import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
export default class Education extends Component {
constructor(props) {
  super(props);
  console.log(props.edu)
  this.state = {};
}
render(){
		return this.props.edu?

			<div>
	{this.props.edu.map((ed, ind)=>
		<div key={ind}>
		<Card>
		<List>
		 <ListItem button>Degree Name : {ed.degreeName}</ListItem>
		 <ListItem button>Institution Name : {ed.tempInstitution}</ListItem>
		 <ListItem button>Start Date: {ed.startDate}</ListItem>
		 <ListItem button>End Date : {ed.endDate}</ListItem>
		 </List>
		</Card>
		<br/>
		<br/>
		</div>
	)}
	</div>
	: <h3>Hmm seems like you haven't built your profile yet </h3>
}
}