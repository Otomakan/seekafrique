
import React, { Component } from 'react'

import {connect} from 'react-redux'
import history from '../../helpers/history.js'

import { Switch, Route, withRouter } from 'react-router-dom'
import LoggedOutRoute from '../LoggedOut/LoggedOutRoute.js'
import LoggedInRoute from '../LoggedIn/LoggedInRoute.js'
import userActions from '../../actions/userActions'
import NavigationBar from './NavBar/NavBar.js'
import './App.css'


class AppFrame extends Component {
  constructor(props) {
    super(props)
    history.listen((location, action) => {
      console.log("History in the making")
      this.forceUpdate()
      })
    const {dispatch} = this.props
    dispatch(userActions.checktoken())
    console.log("Logged in is set to")
    console.log(props)
  }


  render() {
    const {loggedIn} = this.props.authReducer
    return(
      <div className="App">
       <NavigationBar loggedIn={loggedIn}/>
          <div className="main-container">
         <Switch>
            {loggedIn
  ? <Route  history={history} location={history.location} path="/" component={LoggedInRoute}/>
  : <Route  history={history} location={history.location} path="/" component={LoggedOutRoute}/>}
         </Switch >
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
