import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
//Gets a pr
export default class LightButton extends Component {

	render(){
		const {action, link, title} = this.props
		if(action)
			return(
			<Button
				variant="outlined"
				className="light-button"
				onClick={(e)=>{action(e)}}
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
				className="light-button">
				{title}
				</Button>
				</Link>

			)
	}
}

LightButton.propTypes = {
	title: PropTypes.string.isRequired,
	action: PropTypes.function,
	link: PropTypes.string
}