import Cookies from 'universal-cookie'
const cookies = new Cookies()
const companyServices = {
	getProfile,
	uploadJobPost,
	getPosts,
	showAllApplications,
	changeApplicationStatus
}
export default companyServices
function getProfile(){
	return fetch("http://localhost:5000/companyprofile", {
		headers: {
			// Get the authprization header
			'Authorization': cookies.get('JWT_Token_Dic'),
		}
		})
		// Turn the response into json format
		.then(res=>{
			console.log(res)
			if (res.status === 200){
				console.log('positive')
				return res.json()
			} 
			else
				throw res
		})	
		.then(res=>{return res})
		.catch(err=>{throw err.json()})
}

function uploadJobPost(jobPost){
	return fetch("http://localhost:5000/company/jobpost/create", {
		method:"post",
		headers: {
			'Authorization': cookies.get('JWT_Token_Dic'),
			Accept:'application/json',
			'Content-Type':'application/json',
		},
		body:
			JSON.stringify(
			{
				jobPost:jobPost,
			}
				),		
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

function getPosts(){
return fetch("http://localhost:5000/company/jobpost/getall", {
		method:"get",
		headers: {
			'Authorization': cookies.get('JWT_Token_Dic'),
			Accept:'application/json',
			'Content-Type':'application/json',
		},	
	})
	.then(res=>{
		console.log("Inside services")
		console.log(res)
		if (res.status === 200)
			return res.json()
		else
			throw res.json()
	})
	.then(res=> res)
	.catch(err=>{throw err})
}

function showAllApplications(jobPostId){
	console.log("JOBPOST ID")
	console.log(jobPostId)
	return fetch("http://localhost:5000/company/jobposts/applications/showall/"+jobPostId, {
		method:"get",
		headers: {
			'Authorization': cookies.get('JWT_Token_Dic'),
			Accept:'application/json',
			'Content-Type':'application/json',
		},	
	})
	.then(res=>{
		console.log("Inside services")
		console.log(res)
		if (res.status === 200)
			return res.json()
		else
			throw res.json()
	})
	.then(res=> res)
	.catch(err=>{throw err})
}

function changeApplicationStatus(applicationId, newStatus){
	return fetch("http://localhost:5000/company/jobposts/applications/changestatus", {
		method:"post",
		headers: {
			'Authorization': cookies.get('JWT_Token_Dic'),
			Accept:'application/json',
			'Content-Type':'application/json',
		},	
		body:
			JSON.stringify(
			{
			newStatus:newStatus,
			applicationId:applicationId
		})
	}
	)
	.then(res=>{
		console.log("Inside services")
		console.log(res)
		if (res.status === 200)
			return res.json()
		else
			throw res.json()
	})
	.then(res=> res)
	.catch(err=>{throw err})
}