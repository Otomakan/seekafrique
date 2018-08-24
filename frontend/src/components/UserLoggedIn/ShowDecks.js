import React,{Component} from 'react'
import {Link, Route} from 'react-router-dom'
import history from '../../helpers/history.js'

export default class ShowDecks extends Component{
	constructor(props) {
	  super(props);
		console.log(props)
	  this.state = {};
	  this.props.showall()
	  this.updateContext = this.updateContext.bind(this)
	}

	updateContext(){
		console.log(history)
	}

	render(){
		return (this.props.deckLoader
		? <h1>LOADING DECKS</h1>
		: this.props.errors 
			? <div><h1>{this.props.errors[0]}</h1><h3>ERRORS</h3></div>
			:
			<div className="show-decks">
			<h3> Welcome to the Show Decks</h3>
			{this.props.decks.map((deck,key)=>{
				let url = 'showdecks/' + deck._id.$oid
				return <div key={key}>
				<Link onClick={()=>{this.updateContext()}} to={url}>
				<p> {deck.title}</p>
				</Link>
				
				</div>
			}
			)}
			
			</div>
			)
	}
}

