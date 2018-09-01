
import React,{Component} from 'react'
import Errors from '../../Errors.js'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import {Link} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'


export default class ShowAllApplicationsComponent extends Component {
	constructor(props) {
		super(props)
		props.showAllApplications(props.match.params.id)
		this.showApplicationDialog = this.showApplicationDialog.bind(this)
		this.closeApplicationDialog = this.closeApplicationDialog.bind(this)
		this.closeDialog = this.closeDialog.bind(this)
		this.state={
			dialogApplicationOpen:false,
		}
	}
	componentDidMount(){
		this.setState({
			allApplications: this.props.allApplications,
			errors: this.props.errors
		})
	}
	showApplicationDialog(content, event) {
		console.log(event.target.innerText)
		if(event.target.innerText==""){
			console.log('stop propagation!')
	        	event.stopPropagation()
	        return 0
	    }
	    else{
	    	this.setState({
			dialogApplicationOpen:true,
			dialogContent:content
		})
	    }
	}
	closeApplicationDialog(){
		this.setState({
			dialogApplicationOpen:false
		})
	}
	closeDialog(){
		this.setState({
			dialogApplicationOpen:false
		})
	}

	handleStatusChange(applicationId, newStatus,key){
		this.props.changeApplicationStatus(applicationId, newStatus,key)		
	}

	render(){
		const applicationsStatus = ['closed', 'approved', 'underRev', 'submitted', 'canceled']

		const {dialogContent,allApplications,errors} = this.props

		return(
			<div className="all-applications">
			{errors
				?<Errors errors={errors}/>
				:null}	
			<List>

			{allApplications
			? allApplications.map((content, key)=>{
				return <ListItem button 
				key={key}>Golo: {content.personalInfo.firstName} {content.personalInfo.lastName}  
				     Status:  <FormControl >
		             <Select
		            value={content.status}
		            onChange={(e)=>{this.handleStatusChange(content._id.$oid, e.target.value, key)}}
		            input={<Input id="select-multiple" />}	      
		          >
		            {applicationsStatus.map(name => (
		              <MenuItem
		                key={name}
		                value={name}
		                
		              >
		                {name}

		              </MenuItem>
		            ))}
		          </Select>
		        </FormControl>
		   <Link to={{pathname:"/company/jobposts/applications/showprofile", state:{userProfile:content}}}>
		  SEE FULL PROFILE</Link>
				</ListItem>
			})
		    :<CircularProgress/>}

			</List>

		 


		</div>
	)
	}
	// <Typography variant="headline">Position:</Typography>
		      
	// 	          <Typography variant="caption">Salary: {dialogContent.salary}</Typography>
	// 	          <br/>
	// 	          <Typography component="p">Description: </Typography> 
		        
}