

import {connect} from 'react-redux'
import userActions from '../../../actions/userActions.js'
import LogInFormComponent from '../../../components/LogInForm.js'



function mapStateToProps(state){
	console.log(state)
	return {loginErrors: state.authReducer.loginErrors}
}

const  mapDispatchToProps =(dispatch)=>({
		authenticate:(name, password)=>{
			dispatch(userActions.login(name, password))
		},
})

const LogInForm = connect(mapStateToProps, mapDispatchToProps)(LogInFormComponent)
export default LogInForm
