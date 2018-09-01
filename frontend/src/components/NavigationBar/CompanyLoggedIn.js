import React,{Component} from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'
import CompanySideMenu from './CompanySideMenu'

export default class CompanyLoggedInNavBar extends Component {

  render(){
    const open = this.props.open
    const anchorEl = this.props.anchorEl
    const handleClose = this.props.handleClose
    const logout = this.props.logout
    return(
    <div>
          <IconButton
            aria-owns={open ? 'menu-appbar' : null}
            aria-haspopup="true"
            onClick={this.props.handleMenu}
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
            onClose={handleClose}
          >
           	<Link to="/buildprofile"> <MenuItem onClick={handleClose}>Build Profile</MenuItem></Link>
            <Link to="/companyprofile"><MenuItem onClick={handleClose}>Company Profile</MenuItem></Link>
            <MenuItem onClick={logout}> Log Out </MenuItem>
          </Menu>
        </div>
      )
  }
}
