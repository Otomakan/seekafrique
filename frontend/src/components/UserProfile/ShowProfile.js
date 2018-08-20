import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import PersonalInfo from './PersonalInfo.js'
import Education from './Education.js'
import WorkHistory from './WorkHistory'


//IN this component states of tabs are changed locally(aka not in redux store)

export default class ShowProfile extends Component {
	constructor(props) {
	  super(props);
		this.props.getProfile()
		console.log(props)
		this.state={
			toSee: 0
		}
		this.switchTab = this.switchTab.bind(this)
	}

	switchTab(e, val){
		this.setState({toSee:val})
	}
	render(){
		let {toSee}=this.state
		return(
			<div>
			<Errors loginErrors={this.props.errors}/>
			<h1>USER PROFILE</h1>
			{this.props.userProfile
			?
			 	<AppBar position="static">
	          		<Tabs value={toSee} onChange={this.switchTab}>
	            	<Tab label="Personal Information" />
	            	<Tab label="Education" />
	           	 	<Tab label="Work History" href="#basic-tabs" />
	          	</Tabs>
		          	{toSee === 0 && <TabContainer>
		          		<PersonalInfo pinfo=
		          		{this.props.userProfile.profile.personalInfo}/></TabContainer>}
			        {toSee === 1 && <TabContainer>
			        	<Education edu=
		          		{this.props.userProfile.profile.educations}/></TabContainer>}
			        {toSee === 2 && <TabContainer>
			        	<WorkHistory whistory={this.props.userProfile.profile.workHistorys}/></TabContainer>}
	        	</AppBar>
				:<h1>Nope</h1>
			}
			
			</div>
			)
		}
	}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const Errors = (props) =>
	props.errors
	?
		props.loginErrors.length>0
		? <h3> {props.errors}</h3>
		: null
	:null