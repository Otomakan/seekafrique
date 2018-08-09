import buildProfileServices from '../services/buildProfileServices.js'

export const buildProfileConstants = {
	PINFO_REQUEST : 'PERSONAL_INFO_UPLOAD_REQUEST',
	PINFO_SUCCESS : 'PERSONAL_INFO_UPLOAD_SUCCESS',
	PINFO_FAILURE : 'PERSONAL_INFO_UPLOAD_FAILURE',

	WHISTORY_REQUEST : 'WORK_HISTORY_UPLOAD_REQUEST',
	WHISTORY_SUCCESS : 'WORK_HISTORY_UPLOAD_SUCCESS',
	WHISTORY_FAILURE : 'WORK_HISTORY_UPLOAD_FAILURE',

	EDUCATION_REQUEST : 'EDUCATION_UPLOAD_REQUEST',
	EDUCATION_SUCCESS : 'EDUCATION_UPLOAD_SUCCESS',

	EDUCATION_FAILURE : 'EDUCATION_UPLOAD_FAILURE',
}
const buildProfileActions = {
	uploadPInfo,
}
export default buildProfileActions
function uploadPInfo(pinfo){
	return dispatch => {
		console.log("PINFO")
		console.log(pinfo)
		dispatch(request())
		buildProfileServices.uploadPInfo(pinfo)
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

	function request(){ return { type: buildProfileConstants.PINFO_REQUEST}}
    function success(){ return { type: buildProfileConstants.PINFO_SUCCESS}}
    function failure(err){ return { type: buildProfileConstants.PINFO_FAILURE, err}}
	
}