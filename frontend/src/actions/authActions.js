import authServices from '../services/authServices'
import history from '../helpers/history.js'


 const authConstants = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',
 
    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

    COMPANY_LOGIN_REQUEST: 'COMPANY_LOGIN_REQUEST',
    COMPANY_LOGIN_SUCCESS: 'COMPANY_LOGIN_SUCCESS',
    COMPANY_LOGIN_FAILURE: 'COMPANY_LOGIN_FAILURE',
 
    LOGOUT: 'USERS_LOGOUT',
    CHECK_TOKEN_REQUEST: 'CLIENT_CHECK_TOKEN',
    CHECK_TOKEN_SUCCESS: 'CLIENT_CHECK_TOKEN_SUCCESS',
    CHECK_TOKEN_FAILURE: 'CLIENT_CHECK_TOKEN_FAILURE',
 
    GETALL_REQUEST: 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE: 'USERS_GETALL_FAILURE', 
}


const authActions = {
    login,
    logout,
    checktoken,
}

function login(user_type, email, password, redirect) {
    return dispatch => {
        dispatch(request({email}))
        authServices.login(user_type, email, password)
        .then(
            user=>{
                console.log(user)
                dispatch(success(user.name, user.user_type))
                if (redirect)
                    history.push(redirect)
                else
                    history.push('/')
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
    function request(name) { return { type: authConstants.LOGIN_REQUEST, name } }
    function success(name, user_type) { return { type: authConstants.LOGIN_SUCCESS, name, user_type } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
    history.push('/')
    authServices.logout()
        return {type:authConstants.LOGOUT}

}

function checktoken(){
    return dispatch =>{
        //Function checks if theJWT token exist and if so it returns it
        const token = authServices.getToken()
        if(!token){
            dispatch(failure("No token"))
        }
        else{
            dispatch(request('To change'))
            // Using the checktoken service function to check the token's validity
            authServices.checktoken(token)
            .then((user)=>{
                dispatch(success(user.name, user.user_type))
            })
            .catch(err=>{
                if(typeof err.then === "function"){
                    err.then(err=>{
                     dispatch(failure(err.error))
                })
                }
                else
                    dispatch(failure(err))
               
            })
            }
    }
    function request(token) { return { type: authConstants.CHECK_TOKEN_REQUEST, token } }
    function success(name, user_type) { return { type: authConstants.CHECK_TOKEN_SUCCESS, name, user_type } }
    function failure(error) { return { type: authConstants.CHECK_TOKEN_FAILURE, error } }
}

// function companyLogin(email, password, redirect) {
//     return dispatch => {
//         dispatch(request({email}))
//         authServices.companyLogin('companies',email, password)
//         .then(
//             company=>{
//                 console.log(company)
//                 dispatch(success(company.name))
//                 if (redirect)
//                     history.push(redirect)
//                 else
//                     history.push('/')
//             })
//         .catch(
//             err=>{
//                 if(typeof err.then === "function")
//                     err.then(err=>{
//                         //API returns an object which wewant to convert to an array so we can better display errors
//                         var errarray = Object.keys(err.error).reduce((prev, curr,index)=>{
//                             prev.push(err.error[curr])
//                             return prev
//                         },[])
//                         dispatch(failure(errarray))
//                     })
//                 else
//                     dispatch(failure(err.toString()))
//                 }       
//             )
//     }
//     function request(name) { return { type: authConstants.COMPANY_LOGIN_REQUEST, name } }
//     function success(name) { return { type: authConstants.COMPANY_LOGIN_SUCCESS, name } }
//     function failure(error) { return { type: authConstants.COMPANY_LOGIN_FAILURE, error } }
// }



export { authConstants } 
export default authActions