import React, {Component} from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'

import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

import InboxIcon from '@material-ui/icons/Inbox'
import DashBoardIcon from '@material-ui/icons/Dashboard'
import LineStyleIcon from '@material-ui/icons/LineStyle'


import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import StarBorder from '@material-ui/icons/StarBorder'
//the side menu takes 3 props 
//SideMenuOpen to know if the Menu is opened or not
//Logged In to decide what list to display
// toggleMenu to dispatch to redux that the sideMenuOpen should change
export default class SideMenu extends Component{

  constructor(props) {
    super(props)
    this.state={
      jobPostsOpen:true
    }
    this.toggleMenu = this.props.toggleMenu
    this.clickJobPost = this.clickJobPost.bind(this)
  }
  clickJobPost (){
    this.setState({
      jobPostsOpen: !this.state.jobPostsOpen
    })
  }
	render(){
     const pageLinks=[
      {name:'Home', link:'/'},
      {name:'Internships', link:'/internships'},
      {name:'for organizations', link:'/company'},
      {name:'about', link:'/about'},
      {name:'contact', link:'/contact'}
    ]
		return(
      <div>
			      <SwipeableDrawer
          open={this.props.sideMenuOpen}
          onClose={()=>this.toggleMenu()}
          onOpen={()=>this.toggleMenu()}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={()=>this.toggleMenu()}
            onKeyDown={()=>this.toggleMenu()}
          >
          </div>

            <div className="loggedout-sidemenu-list">
            <List> 
              {pageLinks.map((content,key)=>
              <Link to={content.link} onClick={()=>this.toggleMenu()}>
              <ListItem>
                <ListItemIcon>
                  <DashBoardIcon />
                </ListItemIcon>
                <ListItemText primary={content.name} />
              </ListItem>
              </Link>
              )}
              <Divider/>
               <ListItem>
                <ListItemIcon>
                  <DashBoardIcon />
                </ListItemIcon>
                <ListItemText primary="Company" />
              </ListItem>
              <List>
              <Link to="/company/login" onClick={()=>this.toggleMenu()}>
              <ListItem>
               <ListItemIcon>
                  <LineStyleIcon />
                </ListItemIcon>
               <ListItemText primary="Login" />
               </ListItem>
               </Link>
              <Link to="/company/signup" onClick={()=>this.toggleMenu()}>
              <ListItem>
               <ListItemIcon>
                  <LineStyleIcon />
                </ListItemIcon>
               <ListItemText primary="Signup" />
               </ListItem>
               </Link>
              </List>
              <Divider />
               <ListItem>
                <ListItemIcon>
                  <DashBoardIcon />
                </ListItemIcon>
                <ListItemText primary="User" />
              </ListItem>
              <List>
              <Link to="/login" onClick={()=>this.toggleMenu()}>
              <ListItem>
               <ListItemIcon>
                  <LineStyleIcon />
                </ListItemIcon>
               <ListItemText primary="Login" />
               </ListItem>
               </Link>
              <Link to="/signup" onClick={()=>this.toggleMenu()}>
              <ListItem>
               <ListItemIcon>
                  <LineStyleIcon />
                </ListItemIcon>
               <ListItemText primary="Signup" />
               </ListItem>
               </Link>
              </List>
          </List>
          </div>
          
          </SwipeableDrawer>
     
        </div>
			)
	}
}


SideMenu.propTypes = {
  sideMenuOpen: propTypes.bool.isRequired,
  toggleMenu: propTypes.func.isRequired,
  loggedIn: propTypes.bool.isRequired
}