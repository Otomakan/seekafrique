// import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavigationBar from '../../../components/NavigationBar/NavigationBar.js'
import userActions from '../../../actions/userActions.js'
import navBarActions from '../../../actions/NavBarActions.js'


function mapStateToProps(state, ownProps) {
	console.log(state)
    return (
    {
    	loggedIn: ownProps.loggedIn,
    	sideMenuOpen: state.navBarReducer.open
    }) 	
}

function mapDispatchToProps(dispatch, ownProps){
	return({
		logout:()=>{
			dispatch(userActions.logout())
		},
		toggleMenu:()=>{
			dispatch(navBarActions.toggleMenu())
		},
	})
}

const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
export default NavBar