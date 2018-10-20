import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'

export default class SearchBarComponent extends Component {
	render(){
		return(
			<div className='search-bar'>
				<TextField defaultValue="Search Opportunities"/>				
			</div>
			)
	}
}