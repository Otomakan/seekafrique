
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
import ShowUserProfile from '../../CrossAssets/UserProfile/ShowProfile'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


export default class ShowAllApplicationsComponent extends Component {
	constructor(props) {
		super(props)
		props.showAllApplications(props.match.params.id)
		this.showApplicationDialog = this.showApplicationDialog.bind(this)
		this.closeApplicationDialog = this.closeApplicationDialog.bind(this)
		this.closeDialog = this.closeDialog.bind(this)
		this.state={
			dialogApplicationOpen:false,
			dialogContent:{},
			applicationsStatus: props.allApplications.status
		}
	}
	showApplicationDialog(content) {
		this.setState({
			dialogApplicationOpen:true,
			dialogContent:content
		})
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

	render(){
		const applicationsStatus = ['closed', 'approved', 'underRev', 'submitted', 'cancelled']
		const {allApplications,errors} = this.props
		const {dialogContent} = this.state
		return(
			<div className="all-applications">
			{errors
				?<Errors errors={errors}/>
				:null}
			
			<List>
			{allApplications.map((content, key)=>{
				console.log(content)
				return <ListItem button 
				onClick={()=>this.showApplicationDialog(content)
				}
				key={key}>Golo: {content.personalInfo.firstName} {content.personalInfo.lastName} 
				 <FormControl >
		          <Select
		            multiple
		            value={this.state.name}
		            onChange={this.handleChange}
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
				</ListItem>
			}
			)}
		       
			</List>
			<Dialog onClose={this.handleClose} 
					aria-labelledby="simple-dialog-title"
					open={this.state.dialogApplicationOpen} 
					onClose={this.closeDialog}
					 scroll="body">
		        <Card className="dialog-card">
		        <CardContent>
		        <ShowUserProfile userProfile={dialogContent}/>
		            </CardContent>
		          <CardActions>

		        	</CardActions>
		        </Card>
		    </Dialog>
		</div>
	)
	}
	// <Typography variant="headline">Position:</Typography>
		      
	// 	          <Typography variant="caption">Salary: {dialogContent.salary}</Typography>
	// 	          <br/>
	// 	          <Typography component="p">Description: </Typography> 
		        
}