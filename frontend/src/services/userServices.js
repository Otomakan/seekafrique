import Cookies from 'universal-cookie'
const cookies = new Cookies()

const userServices ={
	login,
	logout,
	checktoken,
	getToken,}
export default userServices

function login(name, password) {
	return fetch('http://localhost:5000/authenticate',{
			method:"post",
			headers: {
				Accept:'application/json',
				'Content-Type':'application/json'
			},
			body: 
				JSON.stringify({
					email: name,
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
		cookies.set('JWT_Token_Dic',res.auth_token)
		return res
		
	})
	.catch(err=> {throw err})
}

function logout(){
	cookies.remove('JWT_Token_Dic')
}


function checktoken(cookie){
	return fetch("http://localhost:5000/checktoken", {
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