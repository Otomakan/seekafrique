import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import SignUp from './UserLoggedOut/SignUp/SignUp.js'
import LogIn from './UserLoggedOut/LogIn/LogInForm.js'
import Home from './UserLoggedOut/Home/Home.js'
import NoMatch from './NoMatch.js'
import LoadingBar from '../../components/LoadingBar'
import {connect} from 'react-redux'
import CompanyLogin from './CompanyLoggedOut/LogIn/LogIn.js'
import CompanySignUp from './CompanyLoggedOut/SignUp/SignUp.js'
import CompanyPricing from './CompanyLoggedOut/CompanyPricing.js'
class LoggedOutRouteFrame extends Component {
	render(){
		const {isLoading} = this.props.authReducer
		return isLoading
		? <LoadingBar/>
		: (<Switch>
				<Route exact path="/" component={Home} />
		        <Route path="/signup" component={SignUp} />
		        <Route path="/login" component={LogIn} />
		        <Route path="/company/login" component={CompanyLogin}/>
		        <Route path="/company/signup" component={CompanySignUp}/>
		   		<Route path='/company/pricing' component={CompanyPricing}/>
		   		<Route component={NoMatch}/>
	        </Switch>
			)
	}
}
function mapStateToProps(state) {
    return state

}

const LoggedOutRoute = connect(mapStateToProps)(LoggedOutRouteFrame)
export default LoggedOutRoute