import authActions from './authActions'
import history from '../helpers/history.js'

export const signupConstants = {
	SIGNUP_REQUEST: 'NEW_USER_REGISTER_REQUEST',
	SIGNUP_SUCCESS: 'NEW_USER_REGISTER_SUCCESS',
	SIGNUP_FAIL: 'NEW_USER_REGISTER_FAIL',

	COMPANY_SIGNUP_REQUEST: 'NEW_USER_REGISTER_REQUEST',
	COMPANY_SIGNUP_SUCCESS: 'NEW_USER_REGISTER_SUCCESS',
	COMPANY_SIGNUP_FAIL: 'NEW_USER_REGISTER_FAIL'
}

function userSignup(info) {
	return dispatch => {
		dispatch(request())
		fetch('http://localhost:5000/users.json',{
			method:'post',
			headers: {
				Accept:'application/json',
				'Content-Type':'application/json'
			},
			body:
				JSON.stringify({user:info})
			})
		.then(res=>{
		if (res.status === 200)
			return res.json()
		else
			throw res.json()})
		.then(res=>{
			dispatch(success())
			// The login function takes a redirect arg
			dispatch(authActions.login('users',res.user.email, info.password, '/buildprofile'))
		}).catch(err=>{
			if(typeof err.then === "function")
                    err.then(err=>{
                    	console.log(err)
                        //API returns an object which wewant to convert to an array so we can better display errors
                        var errarray = Object.keys(err.error).reduce((prev, curr,index)=>{
                            prev.push(err.error[curr])
                            return prev
                        },[])
                        dispatch(failure(errarray))
                    })
                else
                    dispatch(failure(err.toString()))
		})
		

    function request(){ return { type: signupConstants.SIGNUP_REQUEST}}
    function success(name){ return { type: signupConstants.SIGNUP_SUCCESS, name}}
    function failure(errors){ return { type: signupConstants.SIGNUP_FAIL, errors}}
	}
}

function companySignup(info) {
	return dispatch => {
		dispatch(request())
		fetch('http://localhost:5000/companys/create',{
			method:'post',
			headers: {
				Accept:'application/json',
				'Content-Type':'application/json'
			},
			body:
				JSON.stringify({company:info})
			})
		.then(res=>{
		if (res.status === 200)
			return res.json()
		else
			throw res.json()})
		.then(res=>{
			dispatch(success())
			console.log(res)
			// The login function takes a redirect arg
			dispatch(authActions.login('companys',res.company.email, info.password, '/'))
		}).catch(err=>{
			if(typeof err.then === "function")
                    err.then(err=>{
                    	console.log(err)
                        //API returns an object which wewant to convert to an array so we can better display errors
                        var errarray = Object.keys(err.error).reduce((prev, curr,index)=>{
                            prev.push(err.error[curr])
                            return prev
                        },[])
                        dispatch(failure(errarray))
                    })
                else
                    dispatch(failure(err.toString()))
		})
		

    function request(){ return { type: signupConstants.SIGNUP_REQUEST}}
    function success(name){ return { type: signupConstants.SIGNUP_SUCCESS, name}}
    function failure(errors){ return { type: signupConstants.SIGNUP_FAIL, errors}}
	}
}
const signUpFuncs={
	userSignup,
	companySignup
}
export default signUpFuncs