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
		const {content, buttonFunctions, buttons}=this.props
		return(
			<Card className="small-jobpost-card">
		        <CardContent>
		          <Typography variant="headline">Position: {content.title}</Typography>
		      		
		          <Typography variant="caption">{content.location}</Typography>
		          <br/>
		          <Typography component="p">{content.description}</Typography> 
		          </CardContent>
		          <CardActions>
		          {
		          	buttons
		          	?   buttons.map((b,key)=>
		          		b.disabled
		          		? <Button key={key}
		          		disabled
		          		color="primary" 
		          		size="small">{b.buttonName}</Button>
		          		: <Button key={key}
		          		onClick={()=>{b.buttonFunction()}}
		          		color="primary" 
		          		size="small">{b.buttonName}</Button> 		
		          	)
		          	:null
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

