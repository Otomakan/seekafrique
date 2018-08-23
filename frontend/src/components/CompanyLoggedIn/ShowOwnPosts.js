import React, {Component} from 'react'

export default class ShowOwnPosts extends Component {
	constructor(props) {
		super(props)
		props.getPosts()
		// .then(
		// 	res =>{console.log(res)}
		// 	)
		console.log(props)
	}
	render(){
		return this.props.allJobPosts.length>0
		?
		<ul>
			{this.props.allJobPosts.map((content,key)=>
				<li key={key}> {content.title}</li>
				)
			}
			
		</ul>			
		: <p> No Post Yet!</p>
	}
}
