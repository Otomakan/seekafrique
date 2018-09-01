import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import {Link, Switch, Route} from 'react-router-dom'
import authActions from '../../actions/authActions.js'
import {connect} from 'react-redux'
import LoadingBar from '../../components/LoadingBar.js'
import { withRouter } from 'react-router-dom'
import DashBoard from './Dashboard/Dashboard.js'
import BuildProfile from './BuildProfile/BuildProfile.js'
import ShowProfile from './CompanyProfile/ShowProfile.js'
import CreateJobPost from './JobPosts/Create'
import ShowOwnJobPosts from './JobPosts/ShowOwn'
import ShowAllApplications from './JobPosts/ShowAllApplications'
import ShowApplicantProfile from '../../components/CrossAssets/UserProfile/ShowProfile'


class CompanyLoggedInRouteComponent extends Component {
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
				<Route exact path='/companyprofile' component={ShowProfile}/>
				<Route exact path='/company/jobposts/create' component={CreateJobPost}/>
				<Route exact path='/company/jobposts/showall' component={ShowOwnJobPosts}/>
				<Route exact path='/company/jobposts/applications/showall/:id' component={ShowAllApplications}/>
				<Route exact path='/company/jobposts/applications/showprofile' component={ShowApplicantProfile}/>
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
const NoMatch= ()=><h1>404 not found</h1>
const CompanyLoggedInRoute = withRouter(connect(mapStateToProps)(CompanyLoggedInRouteComponent))


export default CompanyLoggedInRoute