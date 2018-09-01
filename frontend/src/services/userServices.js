import Cookies from 'universal-cookie'
const cookies = new Cookies()
const userServices = {
	getProfile,
	getAllPosts,
	savePost,
	unsavePost,
	getSavedPosts,
	uploadApplication,
	showAllOwnApplications,
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

function getSavedPosts(){
	return fetch("http://localhost:5000/user/jobposts/saved", {
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
function unsavePost(postId){
	console.log(postId)
		return fetch("http://localhost:5000/user/jobposts/unsave/"+postId, {
		method: 'delete',
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

function uploadApplication(jobApplication){
	console.log(jobApplication)
	return fetch("http://localhost:5000/user/jobposts/newapplication", {
		method:"post",
		headers: {
			'Authorization': cookies.get('JWT_Token_Dic'),
			Accept:'application/json',
			'Content-Type':'application/json',
		},
		body:
			JSON.stringify(jobApplication),		
	})
	.then(res=>{
		console.log("INside services")
		console.log(res)
		if (res.status === 200)
			return res.json()
		else
			throw res.json()
	})
	.then(res=> res)
	.catch(err=>{throw err})
}

function showAllOwnApplications(){
	return fetch("http://localhost:5000/user/jobposts/applications/showall", {
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