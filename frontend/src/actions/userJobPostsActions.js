import userServices from '../services/userServices.js'
import history from '../helpers/history.js'

export const userJobPostsConstants = {

	SHOW_JOB_POSTS_REQUEST :"SHOW_ALL_JOB_POSTS_REQUEST",
	SHOW_JOB_POSTS_SUCCESS :"SHOW_ALL_JOB_POSTS_SUCCESS",
	SHOW_JOB_POSTS_FAILURE :"SHOW_ALL_JOB_POSTS_FAILURE",

	SHOW_SAVED_JOB_POSTS_REQUEST :"SHOW_SAVED_JOB_POSTS_REQUEST",
	SHOW_SAVED_JOB_POSTS_SUCCESS :"SHOW_SAVED_JOB_POSTS_SUCCESS",
	SHOW_SAVED_JOB_POSTS_FAILURE :"SHOW_SAVED_JOB_POSTS_FAILURE",
	
    SHOW_ALL_APPLICATIONS_REQUEST : "SHOW_ALL_OWN_APPLICATIONS_REQUEST",
    SHOW_ALL_APPLICATIONS_SUCCESS : "SHOW_ALL_OWN_APPLICATIONS_SUCCESS",
    SHOW_ALL_APPLICATIONS_FAILURE : "SHOW_ALL_OWN_APPLICATIONS_FAILURE",

	SAVE_JOB_POST_REQUEST :"SAVE_JOB_POST_REQUEST",
	SAVE_JOB_POST_SUCCESS :"SAVE_JOB_POST_SUCCESS",
	SAVE_JOB_POST_FAILURE :"SAVE_JOB_POST_FAILURE",

    UNSAVE_JOB_POST_REQUEST :"UNSAVE_JOB_POST_REQUEST",
    UNSAVE_JOB_POST_SUCCESS :"UNSAVE_JOB_POST_SUCCESS",
    UNSAVE_JOB_POST_FAILURE :"UNSAVE_JOB_POST_FAILURE",

    UPLOAD_APPLICATION_REQUEST: "UPLOAD_APPLICATION_REQUEST",
    UPLOAD_APPLICATION_SUCCESS: "UPLOAD_APPLICATION_SUCCESS",
    UPLOAD_APPLICATION_FAILURE: "UPLOAD_APPLICATION_FAILURE",
    UPLOAD_APPLICATION_RESET: "UPLOAD_APPLICATION_RESET",
    CHANGE_APPLICATION_STATE:"CHANGE_APPLICATION_STATE",
}

const userJobPostsActions = {
	getAllPosts,
	savePost,
    unsavePost,
	getSavedPosts,
    handleApplicationStateChange,
    uploadApplication,
    uploadApplicationReset,
    showAllOwnApplications
}

export default userJobPostsActions


function savePost(postId,key){
	return dispatch=>{
        dispatch(request())
		userServices.savePost(postId)
		.then(
            res=>{
            	console.log(res)
                dispatch(success(key))
            })
        .catch(
            err=>{
            	console.log(err)
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
	function request(){ return { type: userJobPostsConstants.SAVE_JOB_POST_REQUEST}}
    function success(key){ return { type: userJobPostsConstants.SAVE_JOB_POST_SUCCESS,key}}
    function failure(err){ return { type: userJobPostsConstants.SAVE_JOB_POST_FAILURE, err}}	
}

function unsavePost(postId,key){
    return dispatch=>{
        console.log()
        dispatch(request())
        userServices.unsavePost(postId)
        .then(
            res=>{
                dispatch(success(key))   
            })
        .catch(
            err=>{
                console.log(err)
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
    function request(){ return { type: userJobPostsConstants.UNSAVE_JOB_POST_REQUEST}}
    function success(key){ return { type: userJobPostsConstants.UNSAVE_JOB_POST_SUCCESS,key}}
    function failure(err){ return { type: userJobPostsConstants.UNSAVE_JOB_POST_FAILURE, err}}    
}

function getAllPosts(){
	return dispatch=>{
        dispatch(request())
		userServices.getAllPosts()
		.then(
            res=>{
            	console.log(res)
                dispatch(success(res.allJobPosts))
            })
        .catch(
            err=>{
            	console.log(err)
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
	function request(){ return { type: userJobPostsConstants.SHOW_JOB_POSTS_REQUEST}}
    function success(allJobPosts){ return { type: userJobPostsConstants.SHOW_JOB_POSTS_SUCCESS, allJobPosts}}
    function failure(err){ return { type: userJobPostsConstants.SHOW_JOB_POSTS_FAILURE, err}}	

}

function getSavedPosts(){
	return dispatch=>{
        dispatch(request())
		userServices.getSavedPosts()
		.then(
            res=>{
            	console.log(res)
                dispatch(success(res.savedJobPosts))
            })
        .catch(
            err=>{
            	console.log(err)
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
	function request(){ return { type: userJobPostsConstants.SHOW_SAVED_JOB_POSTS_REQUEST}}
    function success(savedJobPosts){ return { type: userJobPostsConstants.SHOW_SAVED_JOB_POSTS_SUCCESS, savedJobPosts}}
    function failure(err){ return { type: userJobPostsConstants.SHOW_SAVED_JOB_POSTS_FAILURE, err}}	

}

function uploadApplication(jobApplication){
     return dispatch => {
        dispatch(request())
        userServices.uploadApplication(jobApplication)
        .then(
            res=>{
                dispatch(success())
            })
        .catch(
            err=>{
                if(typeof err.then === "function")
                    err.then(err=>{
                        //API returns an object which wewant to convert to an array so we can better display errors
                        var errarray = Object.keys(err.errors).reduce((prev, curr,index)=>{
                            prev.push(err.errors[curr])
                            return prev
                        },[])
                        dispatch(failure(errarray))
                    })
                else
                    dispatch(failure(err.toString()))
                }       
            )
    }
    function request(){ return { type: userJobPostsConstants.UPLOAD_APPLICATION_REQUEST}}
    function success(){ return { type: userJobPostsConstants.UPLOAD_APPLICATION_SUCCESS}}
    function failure(err){ return { type: userJobPostsConstants.UPLOAD_APPLICATION_FAILURE, err}}

}

function handleApplicationStateChange(jobApplication){
        return dispatch=>{
        dispatch({type:userJobPostsConstants.CHANGE_APPLICATION_STATE,jobApplication})
    }
}

function showAllOwnApplications(){
    return dispatch=>{
        dispatch(request())
        userServices.showAllOwnApplications()
        .then(
            res=>{
                console.log(res)
                dispatch(success(res.allOwnApplications))
            })
        .catch(
            err=>{
                console.log('errors')
                console.log(err)
                if(typeof err.then === "function")
                    err.then(err=>{
                        //API returns an object which wewant to convert to an array so we can better display errors
                        var errarray = Object.keys(err.errors).reduce((prev, curr,index)=>{
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
    function request(){ return { type: userJobPostsConstants.SHOW_ALL_APPLICATIONS_REQUEST}}
    function success(allOwnApplications){ return { type: userJobPostsConstants.SHOW_ALL_APPLICATIONS_SUCCESS, allOwnApplications}}
    function failure(err){ return { type: userJobPostsConstants.SHOW_ALL_APPLICATIONS_FAILURE, err}} 

}

function uploadApplicationReset(){
    return dispatch=>{
        dispatch({type:userJobPostsConstants.UPLOAD_APPLICATION_RESET})
    }
}