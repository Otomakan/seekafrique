import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'
import SideMenu from './SideMenu'

class NavigationBar extends Component {

	constructor(props) {
	  super(props)
	
	  this.state = {
	  	anchorEl: null,
	  	auth:true,
      title: "Dictionary",
	  }
    this.handleMenu = this.handleMenu.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.logout = this.logout.bind(this)
    console.log(props)
	}

  handleMenu (e) {
    this.setState({ anchorEl: e.currentTarget })
  }

  handleClose() {
    this.setState({ anchorEl: null })
  }

  logout(){
    this.handleClose()
    this.props.logout()
  }

	render(){
		const { anchorEl } = this.state
    const { loggedIn } = this.props
		const open = Boolean(anchorEl)
		return(
    <div className="main-menu">
		<AppBar>
			<Toolbar>
			<IconButton color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.props.toggleMenu}/>
            </IconButton>
             <Typography variant="title" color="inherit" >
              {this.state.title}
            </Typography>
            {loggedIn && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={this.logout}> <Link to="/">Log Out </Link></MenuItem>
                </Menu>
              </div>
            )}
			</Toolbar>
		</AppBar>

    <SideMenu loggedIn={loggedIn} toggleMenu={()=>{this.props.toggleMenu()}} sideMenuOpen={this.props.sideMenuOpen}/>
    </div>
		)
	}
}


NavigationBar.propTypes = {
  logout: propTypes.func.isRequired,
  loggedIn: propTypes.bool.isRequired
}


export default NavigationBar
