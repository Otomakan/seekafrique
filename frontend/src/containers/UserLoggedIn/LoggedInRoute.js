import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import {Link, Switch, Route} from 'react-router-dom'
import authActions from '../../actions/authActions.js'
import {connect} from 'react-redux'
import LoadingBar from '../../components/LoadingBar.js'
import { withRouter } from 'react-router-dom'
import DashBoard from './Dashboard/Dashboard.js'
import BuildProfile from './BuildProfile/BuildProfile.js'
import ShowProfile from './UserProfile/ShowProfile.js'

import ShowAllPosts from './JobPosts/ShowAll.js'
import ShowSavedPosts from './JobPosts/ShowSaved.js'
import ApplyToJob from './JobPosts/ApplyToJob'
import ShowAllOwnApplications from './JobPosts/ShowAllOwnApplications'
import NoMatch from '../LoggedOut/NoMatch.js'


class UserLoggedInRouteComponent extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {}
		this.logOut = this.logOut.bind(this)
	}
	logOut(){
		this.props.dispatch(authActions.logout())
	}
	render(){
		const {name, isLoading} = this.props.authReducer
    	return isLoading
    	? (<LoadingBar/>)
    	: (
			<div className="LoggedInRoute">
			<h3> Welcome {name}</h3>
			<Switch>
				<Route exact path='/' component={DashBoard}/>					
				<Route exact path='/buildprofile' component={BuildProfile}/>
				<Route exact path='/userprofile' component={ShowProfile}/>
				<Route exact path='/jobposts/showall' component={ShowAllPosts}/>
				<Route exact path='/user/jobposts/showsaved' component={ShowSavedPosts}/>
				<Route exact path='/user/jobposts/applytojob' component={ApplyToJob}/>
				<Route exact path='/user/jobposts/applications/showall' component={ShowAllOwnApplications}/>
				<Route component={NoMatch} />
				</Switch>
			<Button onClick={this.logOut}> <Link to="/">LOGOUT </Link></Button>
			
			</div>
			)
		
	}
}
function mapStateToProps(state){
	return state
}

const UserLoggedInRoute = withRouter(connect(mapStateToProps)(UserLoggedInRouteComponent))


export default UserLoggedInRoute