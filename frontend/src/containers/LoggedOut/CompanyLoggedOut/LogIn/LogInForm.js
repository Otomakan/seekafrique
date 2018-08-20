import {connect} from 'react-redux'
import authActions from '../../../../actions/authActions.js'
import LogInFormComponent from '../../../../components/LogInForm.js'


function mapStateToProps(state){
	console.log(state)
	return {loginErrors: state.authReducer.loginErrors}
}

const  mapDispatchToProps =(dispatch)=>({
		authenticate:(email, password)=>{
			dispatch(authActions.login('companys',email, password))
		},
})

const LogInForm = connect(mapStateToProps, mapDispatchToProps)(LogInFormComponent)
export default LogInForm
