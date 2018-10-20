import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
//Gets a pr
export default class DarkButton extends Component {
	render(){
		const {action, link, title} = this.props
		if(action)
			return(
			<Button
				variant="outlined"
				className="dark-button"
				onClick={()=>{action()}}
				style={{ textDecoration: 'none'}}>
				{title}
				</Button>
			)
		if(link)
			return(
			<Link to={link}
			style={{ textDecoration: 'none'}}>
			<Button
				variant="outlined"
				className="dark-button">
				{title}
				</Button>
				</Link>

			)
	}
}

DarkButton.propTypes = {
	title: PropTypes.string.isRequired,
	action: PropTypes.function,
	link: PropTypes.string
}