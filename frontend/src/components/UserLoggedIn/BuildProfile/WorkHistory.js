import React,{Component} from 'react'
import Button from '@material-ui/core/Button'
import WorkBlock from './WorkBlock.js'

export default class WorkHistory extends Component{

	render(){
		return <div className="work-history-container">
				{this.props.workH.map((jobProfile,i)=> 
					<WorkBlock wIndex={i} key={i} jobProfile={jobProfile}{...this.props}/>
				)}
				<Button onClick={()=>{this.props.addWork()}}>Click Me</Button>
				<Button  onClick={()=>{this.props.uploadWork({
					workH: this.props.workH
				})}}> Upload! </Button>	
			</div>
	}
}


