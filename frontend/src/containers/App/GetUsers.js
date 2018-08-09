import React, {Component} from 'react'

class GetUsers extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	user: []
	  }
	}
	getUserData(){
    fetch(`http://localhost:5000/users.json`)
      .then((res,err) => {
        console.log(res)
        console.log(err)
        return res.json()

      }).then((res,err)=>{
      	console.log(res)
      	console.log(err)
      	this.setState({
        	user: JSON.stringify(res),
        })
      })
  }

  	render(){
  		return (
			<div>
	  			<button onClick={this.getUserData.bind(this)}>CLICK</button>
	  			<pre>
	  				{this.state.user}
	  			</pre>
  			</div>
  		)
  }
}

export default GetUsers