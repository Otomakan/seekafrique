import userServices from '../services/userServices.js'
import history from '../helpers/history.js'

export const userJobPostsConstants = {

	SHOW_JOB_POSTS_REQUEST :"SHOW_ALL_JOB_POSTS_REQUEST",
	SHOW_JOB_POSTS_SUCCESS :"SHOW_ALL_JOB_POSTS_SUCCESS",
	SHOW_JOB_POSTS_FAILURE :"SHOW_ALL_JOB_POSTS_FAILURE",
	
	SAVE_JOB_POST_REQUEST :"SAVE_JOB_POST_REQUEST",
	SAVE_JOB_POST_SUCCESS :"SAVE_JOB_POST_SUCCESS",
	SAVE_JOB_POST_FAILURE :"SAVE_JOB_POST_FAILURE",
}

const userJobPostsActions = {
	getAllPosts,
	savePost
}

export default userJobPostsActions


function savePost(postId){
	return dispatch=>{
		console.log(postId)
		userServices.savePost(postId)
		.then(
            res=>{
            	console.log(res)
                dispatch(success())
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
    function success(allJobPosts){ return { type: userJobPostsConstants.SAVE_JOB_POST_SUCCESS}}
    function failure(err){ return { type: userJobPostsConstants.SAVE_JOB_POST_FAILURE, err}}	

}
function getAllPosts(){
	return dispatch=>{
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