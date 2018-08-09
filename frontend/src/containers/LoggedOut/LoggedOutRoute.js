import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import SignUp from './SignUp/SignUp.js'
import LogIn from './LogIn/LogIn.js'
import Home from './Home/Home.js'
import NoMatch from './NoMatch.js'
import LoadingBar from '../../components/LoadingBar'
import {connect} from 'react-redux'

class LoggedOutRouteFrame extends Component {
	render(){
		const {isLoading} = this.props.authReducer
		return isLoading
		? <LoadingBar/>
		: (<Switch>
				<Route exact path="/" component={Home} />
		        <Route path="/signup" component={SignUp} />
		        <Route path="/login" component={LogIn} />
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