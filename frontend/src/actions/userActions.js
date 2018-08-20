import userServices from '../services/userServices'

const userConstants = {
    GET_PROFILE: 'USERS_GET_PROFILE',
    GET_PROFILE_SUCCESS: 'USERS_GET_PROFILE_SUCCESS',
    GET_PROFILE_FAILURE: 'USERS_GET_PROFILE_FAILURE',
}

const userActions = {
    getProfile,
}

function getProfile(){
    return dispatch =>{
        dispatch(request())
        userServices.getProfile()
        .then(
            res=>{
                console.log(res)
                dispatch(success(res))
            })
        .catch(
            err=>{
                console.log(err)
                if(err.then){
                    if(typeof err.then === "function")
                    err.then(err=>{
                        //API returns an object which wewant to convert to an array so we can better display errors
                        // var errarray = Object.keys(err.error).reduce((prev, curr,index)=>{
                        //     prev.push(err.error[curr])
                        //     return prev
                        // },[])
                        dispatch(failure(err))
                    })
                }
                else
                    dispatch(failure(err.toString()))
            }
        )
    }
    function request() { return { type: userConstants.GET_PROFILE} }
    function success(profile) { return { type: userConstants.GET_PROFILE_SUCCESS, profile} }
    function failure(error) { return { type: userConstants.GET_PROFILE_FAILURE, error } }

}

export {userConstants}
export default userActions