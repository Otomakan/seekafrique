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

    WORK_REQUEST : 'WORK_UPLOAD_REQUEST',
    WORK_SUCCESS : 'WORK_UPLOAD_SUCCESS',
    WORK_FAILURE : 'WORK_UPLOAD_FAILURE',

    ADD_EDUCATION: 'EDUCATION_ADDITION_REQUEST',
    REMOVE_EDUCATION : 'EDUCATION_REMOVAL_REQUEST',

    ADD_WORK: 'WORK_ADDITION_REQUEST',
    REMOVE_WORK : 'WORK_REMOVAL_REQUEST',

    CHANGE_EDU_STATE: 'CHANGE_STATE_EDUCATION',
    CHANGE_WORK_STATE: 'CHANGE_STATE_WORK'
}

const buildProfileActions = {
	uploadPInfo,
    addEdu,
    uploadEdu,
    removeEdu,
    uploadWork,
    handleEduStateChange,
    handleWorkStateChange,
    addWork,
    removeWork
}

export default buildProfileActions
function uploadPInfo(pinfo){
	return dispatch => {
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

function uploadEdu(eduinfo){
    return dispatch => {
        dispatch(request())
        buildProfileServices.uploadEdu(eduinfo)
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

    function request(){ return { type: buildProfileConstants.EDUCATION_REQUEST}}
    function success(){ return { type: buildProfileConstants.EDUCATION_SUCCESS}}
    function failure(err){ return { type: buildProfileConstants.EDUCATION_FAILURE, err}}
}

function addEdu(){
    return dispatch =>{
        dispatch({type: buildProfileConstants.ADD_EDUCATION})
    }
}

function removeEdu(eduIndex){
    return dispatch =>{
        dispatch({type: buildProfileConstants.REMOVE_EDUCATION, eduIndex})
    }
}


function uploadWork(workinfo){
    return dispatch => {
        dispatch(request())
        buildProfileServices.uploadWork(workinfo)
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
    function request(){ return { type: buildProfileConstants.WHISTORY_REQUEST}}
    function success(){ return { type: buildProfileConstants.WHISTORY_SUCCESS}}
    function failure(err){ return { type: buildProfileConstants.WHISTORY_FAILURE, err}}
}

function handleEduStateChange(eduIndex, eduState){
    return dispatch=>{
        dispatch({type:buildProfileConstants.CHANGE_EDU_STATE, eduIndex, eduState})
    }
}

function addWork(){
    return dispatch=>{
        dispatch({type: buildProfileConstants.ADD_WORK})
    }
}
function removeWork(wIndex){
    return dispatch=>{
        dispatch({type: buildProfileConstants.REMOVE_WORK, wIndex})
    }
}

function handleWorkStateChange(workIndex, workState){
    return dispatch=>{
        dispatch({type:buildProfileConstants.CHANGE_WORK_STATE, workIndex, workState})
    }
}