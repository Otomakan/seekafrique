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
import UserSideMenu from './UserSideMenu'
import CompanySideMenu from './CompanySideMenu'
import LoggedOutSideMenu from './LoggedOutSideMenu'
import LoggedOutNavBar from './LoggedOut'
import UserLoggedInNavBar from './UserLoggedIn'
import CompanyLoggedInNavBar from './CompanyLoggedIn'
import LoggedOutBar from './LoggedOutBar'
import MediaQuery from 'react-responsive'

class NavigationBar extends Component {

	constructor(props) {
	  super(props)
	
	  this.state = {
	  	anchorEl: null,
	  	auth:true,
      title: "Seek Afrique",
	  }
    this.handleMenu = this.handleMenu.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.logout = this.logout.bind(this)
	}

  handleMenu (e) {
    console.log(e)
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
    const { loggedIn, user_type } = this.props
		const open = Boolean(anchorEl)
		return(
    <div className="main-menu">
		<AppBar className="appbar" positionAbsolute>
    <Toolbar className="toolbar">
    {loggedIn
      ?
      <div>
      <IconButton onClick={this.props.toggleMenu} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
             
                <Typography variant="title" color="inherit" >
                <Link to='/' style={{ textDecoration: 'none'}}>
                  {this.state.title}
                  </Link>
                </Typography>
              
            {user_type ==='company'
               ?<CompanyLoggedInNavBar
                 handleClose={()=>{this.handleClose()}}
                 handleMenu={(e)=>{this.handleMenu(e)}}
                 logout={()=>{this.logout()}}
                 open={open} anchorEl={anchorEl}/>
              : <UserLoggedInNavBar 
                  handleClose={()=>{this.handleClose()}}
                  handleMenu={(e)=>{this.handleMenu(e)}}
                  logout={()=>{this.logout()}}
                  open={open} anchorEl={anchorEl}/>
            }
      </div>
      :<div>
      <MediaQuery class="small" maxWidth={900}>   
       <IconButton onClick={this.props.toggleMenu}  color="inherit" aria-label="Menu">
              <MenuIcon className='icon-menu'/>
            </IconButton>
         </MediaQuery>
         <LoggedOutBar/>

        </div>
    }
		</Toolbar>	
		</AppBar>
    { loggedIn
    ?user_type ==='company'
    ?<CompanySideMenu loggedIn={loggedIn} toggleMenu={()=>{this.props.toggleMenu()}} sideMenuOpen={this.props.sideMenuOpen}/>
    :<UserSideMenu loggedIn={loggedIn} toggleMenu={()=>{this.props.toggleMenu()}} sideMenuOpen={this.props.sideMenuOpen}/>
    :<LoggedOutSideMenu loggedIn={loggedIn} toggleMenu={()=>{this.props.toggleMenu()}} sideMenuOpen={this.props.sideMenuOpen}/> }    
    </div>
		)
	}
}


NavigationBar.propTypes = {
  logout: propTypes.func.isRequired,
  loggedIn: propTypes.bool.isRequired
}


export default NavigationBar
