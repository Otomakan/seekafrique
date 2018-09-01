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
	  super(props)
		if(this.props.userProfile){
			this.state = {
				toSee: 0,
				userProfile : this.props.userProfile
			}
		}
		if(this.props.location.state){
			if (this.props.location.state.userProfile)
			this.state = {
				toSee: 0,
				userProfile : this.props.location.state.userProfile
			}
		}
		this.switchTab = this.switchTab.bind(this)
	}

	switchTab(e, val){
		this.setState({toSee:val})
	}
	render(){
		const {userProfile, toSee}=this.state
		
		return(
			<div>
			<Errors loginErrors={this.props.errors}/>
			<h1>USER PROFILE</h1>
			{userProfile
			?
			 	<AppBar position="static">
	          		<Tabs 
	          			scrollable
	          			value={toSee}
	          			onChange={this.switchTab}
	          			scrollButtons="auto">
	            	<Tab label="Personal Information" />
	            	<Tab label="Education" />
	           	 	<Tab label="Work History" href="#basic-tabs" />
	          	</Tabs>
		          	{toSee === 0 && <TabContainer>
		          		<PersonalInfo pinfo=
		          		{userProfile.personalInfo}/></TabContainer>}
			        {toSee === 1 && <TabContainer>
			        	<Education edu=
		          		{userProfile.educations}/></TabContainer>}
			        {toSee === 2 && <TabContainer>
			        	<WorkHistory whistory={userProfile.workHistorys}/></TabContainer>}
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