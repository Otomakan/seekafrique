import Cookies from 'universal-cookie'
const cookies = new Cookies()

const builProfilesServices = {
	uploadPInfo,
	uploadEdu,
	uploadWork
}

function uploadPInfo(pinfo){
	return fetch("http://localhost:5000/userprofile/pinfo", {
		method:"post",
		headers: {
			'Authorization': cookies.get('JWT_Token_Dic'),
			Accept:'application/json',
			'Content-Type':'application/json',
		},
		body:
			JSON.stringify(pinfo),		
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

function uploadEdu(eduinfo){
	return fetch("http://localhost:5000/userprofile/createedu", {
		method:"post",
		headers: {
			'Authorization': cookies.get('JWT_Token_Dic'),
			Accept:'application/json',
			'Content-Type':'application/json',
		},
		body:
			JSON.stringify(eduinfo),		
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

function uploadWork(workinfo){
	return fetch("http://localhost:5000/userprofile/createworkh", {
		method:"post",
		headers: {
			'Authorization': cookies.get('JWT_Token_Dic'),
			Accept:'application/json',
			'Content-Type':'application/json',
		},
		body:
			JSON.stringify(workinfo),		
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
export default builProfilesServices