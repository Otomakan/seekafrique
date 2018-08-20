import React,{Component} from 'react'
import EducationBlock from './EducationBlock'
import Button from '@material-ui/core/Button'

//The Education component is a bit weir, the way I implemented it, eeach Education block
// stores its own state with containing a standard "Education  object (degreeName, instituion etc)"
// There is an array in the redux store which stores each of these education blocks
//When we press the Add Edu button, it pushes an empty object.
//When the state of child component is updated, it updates its equivalent array element in the redux store
//I am still a bit surprised it works
export default class Education extends Component{
	render(){
		return <div className="education-box">
		{this.props.education.map((edu, i)=>
			<EducationBlock eduIndex={i} key={i} eduProfile={edu} {...this.props}/>)}
		<Button onClick={()=>{this.props.addEdu()}}>Add  Edu</Button>
					<Button  onClick={()=>{this.props.uploadEdu({
				educationH:
					this.props.education
			 	})}}> Upload! </Button>	
		</div>
	}
}








