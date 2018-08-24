import Cookies from 'universal-cookie'
const cookies = new Cookies()
const userServices = {
	getProfile,
	getAllPosts,
	savePost
}
export default userServices
function getProfile(){
	return fetch("http://localhost:5000/userprofile", {
		headers: {
			// Get the authprization header
			'Authorization': cookies.get('JWT_Token_Dic'),
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


function getAllPosts(){
	return fetch("http://localhost:5000/jobposts/showall", {
		headers: {
			// Get the authprization header
			'Authorization': cookies.get('JWT_Token_Dic'),
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

function savePost(postId){
	console.log(postId)
		return fetch("http://localhost:5000/user/jobposts/save/"+postId, {
		method: 'post',
		headers: {
			// Get the authprization header
			'Authorization': cookies.get('JWT_Token_Dic'),
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