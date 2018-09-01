import React, {Component} from 'react'
import {Link} from 'react-router-dom'

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
			{this.props.allJobPosts.map((content,key)=>{
				let link = '/company/jobposts/applications/showall/'+content._id.$oid
				return <li key={key}> {content.title} <Link to={link}><button> Show all Applications </button></Link></li>
			
			}
					)
			}
			
		</ul>			
		: <p> No Post Yet!</p>
	}
}
