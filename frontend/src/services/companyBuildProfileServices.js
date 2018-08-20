
import Cookies from 'universal-cookie'
const cookies = new Cookies()
const cbps = {
	uploadBasicInfo
}
export default cbps

function uploadBasicInfo(binfo){
	return fetch("http://localhost:5000/companyprofile/binfo", {
		method:"post",
		headers: {
			'Authorization': cookies.get('JWT_Token_Dic'),
			Accept:'application/json',
			'Content-Type':'application/json',
		},
		body:
			JSON.stringify(binfo),		
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