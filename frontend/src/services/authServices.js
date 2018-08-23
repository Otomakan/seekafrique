import Cookies from 'universal-cookie'
const cookies = new Cookies()

const authServices ={
	login,
	logout,
	checktoken,
	getToken,}
export default authServices

// The login function takes in a userType so we can send auth request as companies or users
//The path for the cookie setting is cusotm so will have to be changed when put in a new environment
function login(user_type, email, password) {
	return fetch('http://localhost:5000/'+user_type+'/authenticate',{
			method:"post",
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
	.then(res=>{
		if (res.status === 200){
			return res.json()
		} 
		else
			throw res.json()
	})
	.then(res=>{
		console.log("Authenticated!")
		console.log(res)
		// Makes sure we go to the / path otherwise company redirection gets weird
		cookies.set('JWT_Token_Dic',res.auth_token,{ path: '/' })
		return res
		
	})
	.catch(err=> {throw err})
}

function logout(){
	console.log('removing tokens')
	cookies.remove('JWT_Token_Dic','/')
	cookies.remove('JWT_Token_Dic','/company')
}


function checktoken(cookie){
	return fetch("http://localhost:5000/users/checktoken", {
		method:"post",
		headers: {
			// Get the authprization header
			'Authorization': cookie
		}
		})
		// Turn the response into json format
		.then(res=>{
			console.log(res)
			if (res.status === 200){
				return res.json()
			} 
			else
				throw res
		})	
		.then(res=>{return res})
		.catch(err=>{throw err.json()})
}

function getToken(){
	const token = cookies.get('JWT_Token_Dic')
	if (token)
		return token
	else
		return 
}