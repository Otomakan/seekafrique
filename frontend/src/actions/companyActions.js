import companyServices from '../services/companyServices'

const companyConstants = {
    GET_PROFILE: 'COMPANYS_GET_PROFILE',
    GET_PROFILE_SUCCESS: 'COMPANYS_GET_PROFILE_SUCCESS',
    GET_PROFILE_FAILURE: 'COMPANYS_GET_PROFILE_FAILURE',
}

const companyActions = {
    getProfile,
}

function getProfile(){
    return dispatch =>{
        dispatch(request())
        companyServices.getProfile()
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
    function request() { return { type: companyConstants.GET_PROFILE} }
    function success(profile) { return { type: companyConstants.GET_PROFILE_SUCCESS, profile} }
    function failure(error) { return { type: companyConstants.GET_PROFILE_FAILURE, error } }

}

export {companyConstants}
export default companyActions