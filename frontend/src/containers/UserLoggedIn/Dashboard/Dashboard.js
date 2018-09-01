import DashboardComponent from '../../../components/UserLoggedIn/Dashboard.js'
import {connect} from 'react-redux'
import React from 'react'



function mapStateToProps(state, ownProps){
	return state
}

const Dashboard = connect(mapStateToProps)(DashboardComponent)
export default Dashboard