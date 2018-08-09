import DashboardComponent from '../../../components/LoggedIn/Dashboard.js'
import {connect} from 'react-redux'
import React from 'react'


function mapDispatchToProps(dispatch, ownProps){
	
}
function mapStateToProps(state, ownProps){
	return state
}
 const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)
export default Dashboard