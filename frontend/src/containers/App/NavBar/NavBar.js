// import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavigationBar from '../../../components/NavigationBar/NavigationBar.js'
import authActions from '../../../actions/authActions.js'
import navBarActions from '../../../actions/NavBarActions.js'


function mapStateToProps(state, ownProps) {
    return (
    {
    	loggedIn: ownProps.loggedIn,
    	userType: ownProps.user_type,
    	sideMenuOpen: state.navBarReducer.open
    }) 	
}

function mapDispatchToProps(dispatch, ownProps){
	return({
		logout:()=>{
			dispatch(authActions.logout())
		},
		toggleMenu:()=>{
			dispatch(navBarActions.toggleMenu())
		},
	})
}

const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
export default NavBar