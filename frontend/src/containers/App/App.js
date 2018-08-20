
import React, { Component } from 'react'

import {connect} from 'react-redux'
import history from '../../helpers/history.js'

import { Switch, Route, withRouter } from 'react-router-dom'
import LoggedOutRoute from '../LoggedOut/LoggedOutRoute.js'
import CompanyLoggedInRoute from '../CompanyLoggedIn/LoggedInRoute.js'
import UserLoggedInRoute from '../UserLoggedIn/LoggedInRoute.js'
import authActions from '../../actions/authActions'
import NavigationBar from './NavBar/NavBar.js'
import './App.css'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'



class AppFrame extends Component {
  constructor(props) {
    super(props)
    history.listen((location, action) => {
      console.log("History in the making")
      this.forceUpdate()
      })
    const {dispatch} = this.props
    dispatch(authActions.checktoken())
    console.log("Logged in is set to")
    console.log(props)
  }


  render() {
    const {loggedIn, user_type} = this.props.authReducer
    return(
      <div className="App">
       <NavigationBar loggedIn={loggedIn}/>
          <div className="main-container">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <Switch>
            {loggedIn
              ? user_type ==='company'
              ?<Route  history={history} location={history.location} path="/" component={CompanyLoggedInRoute}/>
              :<Route  history={history} location={history.location} path="/" component={UserLoggedInRoute}/>
              : <Route  history={history} location={history.location} path="/" component={LoggedOutRoute}/>}
         </Switch >
         </MuiPickersUtilsProvider>
          </div>
      </div>
      )
      
  }
}

//This object redirects the user to the login route if the loggedin redux object is set to true and inversely to the logout route
// const WhichRoute = (props) =>



function mapStateToProps(state) {
    return state

}

const App = withRouter(connect(mapStateToProps)(AppFrame))
export default App
