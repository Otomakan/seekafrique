import userActions from './userActions'

export const signupConstants = {
	SIGNUP_REQUEST: 'NEW_USER_REGISTER_REQUEST',
	SIGNUP_SUCCESS: 'NEW_USER_REGISTER_SUCCESS',
	SIGNUP_FAIL: 'NEW_USER_REGISTER_FAIL'
}

function signup(email, password) {
	return dispatch => {
		dispatch(request({email}))
		fetch('http://localhost:5000/users.json',{
			method:'post',
			headers: {
				Accept:'application/json',
				'Content-Type':'application/json'
			},
			body:
				JSON.stringify({
					email: email,
					password: password
				})
			})
		.then(res=>res.json())
		.then(res=>{dispatch(success());dispatch(userActions.login(res.user.name, password))})
		.catch(err=>{console.log(err);dispatch(failure(err));dispatch(userActions.failure(err))})
		

    function request(name){ return { type: signupConstants.SIGNUP_REQUEST, name}}
    function success(name){ return { type: signupConstants.SIGNUP_SUCCESS, name}}
    function failure(err){ return { type: signupConstants.SIGNUP_FAIL, err}}
	}
}

export default signup