import companyBuildProfileServices from '../services/companyBuildProfileServices'

const companyBuildProfileActions ={
	uploadBasicInfo,
	changeBasicInfo,
}
export default companyBuildProfileActions
export const companyBuildProfileConstants = {
	BASIC_INFO_REQUEST : 'PERSONAL_INFO_UPLOAD_REQUEST',
	BASIC_INFO_SUCCESS : 'PERSONAL_INFO_UPLOAD_SUCCESS',
	BASIC_INFO_FAILURE : 'PERSONAL_INFO_UPLOAD_FAILURE',

	BASIC_INFO_CHANGE : 'CHANGE_BASIC_INFO',
}
function uploadBasicInfo(pinfo){
	return dispatch => {
		dispatch(request())
		companyBuildProfileServices.uploadBasicInfo(pinfo)
		.then(
            res=>{
                dispatch(success())
            })
        .catch(
            err=>{
                if(typeof err.then === "function")
                    err.then(err=>{
                        //API returns an object which wewant to convert to an array so we can better display errors
                        var errarray = Object.keys(err.error).reduce((prev, curr,index)=>{
                            prev.push(err.error[curr])
                            return prev
                        },[])
                        dispatch(failure(errarray))
                    })
                else
                    dispatch(failure(err.toString()))
                }       
            )
	}

	function request(){ return { type: companyBuildProfileConstants.BASIC_INFO_REQUEST}}
    function success(){ return { type: companyBuildProfileConstants.BASIC_INFO_SUCCESS}}
    function failure(err){ return { type: companyBuildProfileConstants.BASIC_INFO_FAILURE, err}}	
 
}

function changeBasicInfo(binfo){
	return dispatch =>{
		dispatch({type: companyBuildProfileConstants.BASIC_INFO_CHANGE, binfo})
	}
}