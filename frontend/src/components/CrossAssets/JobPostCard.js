import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

//Job pot card takes in props jobPost prop, which is an JOBPOST object
// You can pas down a 'buttons' prop which is an array
export default class JobPostCard extends Component {


	render(){
		const {jobPost, buttonFunctions}=this.props
		return(
			<Card className="dialog-card">
		        <CardContent>
		          <Typography variant="headline">Position: {jobPost.title}</Typography>
		      
		          <Typography variant="caption">Salary: {jobPost.salary}</Typography>
		          <br/>
		          <Typography component="p">Description: <br/>{jobPost.description}</Typography> 
		          </CardContent>
		          <CardActions>
		          {
		          	this.props.buttons.map((content,key)=>
		          		content.disabled
		          		? <Button key={key}
		          		disabled
		          		color="primary" 
		          		size="small">{content.buttonName}</Button>
		          		: <Button key={key}
		          		onClick={()=>{content.buttonFunction()}}
		          		color="primary" 
		          		size="small">{content.buttonName}</Button> 		
		          	)
		          }
		        </CardActions>  
		    </Card>
			)
	}
}

JobPostCard.propTypes={
	jobPost:PropTypes.object,
	jobPost: PropTypes.shape({
		title: PropTypes.string,
		salary : PropTypes.string,
		description : PropTypes.string,
	}),
	
	buttons : PropTypes.array,
	buttons : PropTypes.arrayOf(PropTypes.shape({
		buttonName: PropTypes.string,
		buttonFunction: PropTypes.func
	}))
}

