import React, {Component} from 'react'
import logoPath from '../../assets/seeklogo.png'
import Typography from '@material-ui/core/Typography'
import LightButton from '../CrossAssets/LightButton'
import {Link} from 'react-router-dom'
import Popper from  '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import MediaQuery from 'react-responsive'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'

export default class LoggedOutBar extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	login:{
	  		anchorEl:null,
	  		open:false
	  	},
	  	signup:{
	  		anchorEl:null,
	  		open:false
	  	},	
	  	}
	  	this.handleClick = this.handleClick.bind(this)
	}

	handleClick (e,button) {
	    const { currentTarget } = e
	    console.log(e)
	    this.setState(state => ({
	    	[button]:{
	    		anchorEl: currentTarget,
	      		open: !state[button].open,
	    	}
	    }))
  	}
	render(){
		const open = this.props.open
	    const anchorEl = this.props.anchorEl
	    const handleClose = this.props.handleClose
	    const logout = this.props.logout
		const pageLinks=[
			{name:'Internships', link:'/internships'},
			{name:'for organizations', link:'/company'},
			{name:'about', link:'/about'},
			{name:'contact', link:'/contact'}
		]
		const that = this
		const buttons = [
			{title:'Sign In', link:'/login'},
			{title:'Sign Up', link:'/signup'}
		]
		const {login, signup} = this.state
			return(

			<div className="logged-out-bar">
				<MediaQuery minWidth={900}>
				<Link to='/' style={{ textDecoration: 'none'}}>
					<img className="appbar-logo" src={logoPath}/>
				</Link>
				<Link to='/' style={{ textDecoration: 'none'}}>
					<Typography className="appbar-title" variant="title">
		            	Seek Afrique
		          	</Typography>
		        </Link>
		        <div className="appbar-content">
		        	{pageLinks.map((content,key)=>
		        	<Link style={{ textDecoration: 'none'}}  key={key} to={content.link}>
			        	<div className="appbar-content-link">
			        		{content.name}
			        	</div>
		        	</Link>
		        	)}
		        </div>
		        <div className="appbar-buttons-container">
		        	{buttons.map((content, key)=>
		        		content.action
		        		?<LightButton key={key} title={content.title} action={content.link}/>
		        		:<LightButton key={key} title={content.title} link={content.link}/>
		        		)}
		        	<LightButton title="Testing" action={(e)=>{
						this.handleClick(e,'login')}}/>
		        </div>
		        <Popper  open={this.state.login.open} anchorEl={this.state.login.anchorEl} transition>
		          {({ TransitionProps }) => (
		            <Fade {...TransitionProps} timeout={350}>
		              <Paper>
		                <Typography>The content of the Popper.</Typography>
		              </Paper>
		            </Fade>
		          )}
     			</Popper>
     			</MediaQuery>
     			<MediaQuery maxWidth={900}>
     				 <div>
		        	{buttons.map((content, key)=>
		        		content.action
		        		?<LightButton key={key} title={content.title} action={content.link}/>
		        		:<LightButton key={key} title={content.title} link={content.link}/>
		        		)}
		        </div>
     			</MediaQuery>
			</div>
			)

	}
}