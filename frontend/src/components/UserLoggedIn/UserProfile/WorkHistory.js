import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

export default class WorkHistory extends Component {

render(){
	return this.props.whistory?
		this.props.whistory.map((work, ind)=>
		<div key={ind}>
		<Card>
		<List>
		 <ListItem button>Company : {work.company}</ListItem>
		 <ListItem button>Job Title {work.jobTitle}</ListItem>
		 <ListItem button>Company Website{work.companyWebsite}</ListItem>
		 <ListItem button>Start Date: {work.startDate}</ListItem>
		 <ListItem button>End Date : {work.endDate}</ListItem>
		 </List>
		</Card>
		<br/>
		<br/>
		</div>
			
		)
		: <h3>Hmm seems like you haven't built your profile yet </h3>
}
}