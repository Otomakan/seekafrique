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

          {
            this.props.loggedIn?
            <div className="loggedin-sidemenu-list">
            <List> 
            <Link to="/dashboard" onClick={()=>this.toggleMenu()}>
              <ListItem>
                <ListItemIcon>
                  <DashBoardIcon />
                </ListItemIcon>
                <ListItemText primary="DashBoard" />
              </ListItem>
              </Link>
             <ListItem button onClick={()=>{this.clickJobPost()}}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Job Posts" />
                  {this.state.jobPostsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              <Collapse in={this.state.jobPostsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>

            <Link to="/jobposts/showall" onClick={()=>this.toggleMenu()}>
                <ListItem button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Show All Posts" />
                </ListItem>
                </Link>
                <Link to="/user/jobposts/showsaved" onClick={()=>this.toggleMenu()} >
                <ListItem button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Saved Job Posts" />
                </ListItem>
                </Link>
              <Link to="/user/jobposts/applications/showall" onClick={()=>this.toggleMenu()} >
                <ListItem button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Show Applications" />
                </ListItem>
                </Link>
              </List>
            </Collapse>
              </List>
              <Divider />
                <List>
                <ListItem>
                 <ListItemText primary="Blob" />
                 </ListItem>
                 <ListItem>
                  <ListItemText primary="Golo" />
                  </ListItem>
          </List>
          </div>
            :
            <div className="loggedout-sidemenu-list">
            <List> 
              <ListItem>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem>
               <ListItemText primary="Stuff" />
               </ListItem>
              </List>
              <Divider />
                <List>
                <ListItem>
                 <ListItemText primary="Blob" />
                 </ListItem>
                 <ListItem>
                  <ListItemText primary="Golo" />
                  </ListItem>
          </List>
          </div>
          }
          
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