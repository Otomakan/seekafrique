import companyServices from '../services/companyServices.js'
import history from '../helpers/history.js'

export const companyJobPostsConstants = {
	JOB_POST_REQUEST :"JOB_POST_UPLOAD_REQUEST",
	JOB_POST_SUCCESS :"JOB_POST_UPLOAD_SUCCESS",
	JOB_POST_FAILURE :"JOB_POST_UPLOAD_FAILURE",

	SHOW_JOB_POST_REQUEST :"SHOW_OWN_JOB_POST_REQUEST",
	SHOW_JOB_POST_SUCCESS :"SHOW_OWN_JOB_POST_SUCCESS",
	SHOW_JOB_POST_FAILURE :"SHOW_OWN_JOB_POST_FAILURE",

	CHANGE_STATE : "CHANGE_JOB_POST_STATE"
}

const companyJobPostsActions = {
	handleInputChange,
	uploadJobPost,
	showOwnPosts
}

export default companyJobPostsActions

function uploadJobPost(jobPost){
	return dispatch=>{
		dispatch(request())
		companyServices.uploadJobPost(jobPost)
		.then(
            res=>{
                dispatch(success())
                history.push('/company/jobposts/showall')
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
	function request(){ return { type: companyJobPostsConstants.JOB_POST_REQUEST}}
    function success(){ return { type: companyJobPostsConstants.JOB_POST_SUCCESS}}
    function failure(err){ return { type: companyJobPostsConstants.JOB_POST_FAILURE, err}}	

}

function handleInputChange(jobPost){
    return dispatch=>{
        dispatch({type:companyJobPostsConstants.CHANGE_STATE, jobPost})
    }
}

function showOwnPosts(){
	return dispatch=>{
		companyServices.getPosts()
		.then(
            res=>{
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
	function request(){ return { type: companyJobPostsConstants.SHOW_JOB_POST_REQUEST}}
    function success(allJobPosts){ return { type: companyJobPostsConstants.SHOW_JOB_POST_SUCCESS, allJobPosts}}
    function failure(err){ return { type: companyJobPostsConstants.SHOW_JOB_POST_FAILURE, err}}	

}