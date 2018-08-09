import userServices from '../services/userServices'
import history from '../helpers/history.js'


 const userConstants = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',
 
    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
 
    LOGOUT: 'USERS_LOGOUT',
    CHECK_TOKEN_REQUEST: 'CLIENT_CHECK_TOKEN',
    CHECK_TOKEN_SUCCESS: 'CLIENT_CHECK_TOKEN_SUCCESS',
    CHECK_TOKEN_FAILURE: 'CLIENT_CHECK_TOKEN_FAILURE',
 
    GETALL_REQUEST: 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE: 'USERS_GETALL_FAILURE', 
}


const userActions = {
    login,
    logout,
    checktoken,
}

function login(name, password) {
    return dispatch => {
        dispatch(request({name}))
        userServices.login(name, password)
        .then(
            user=>{
                console.log(user)
                dispatch(success(user.name))
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
    function request(name) { return { type: userConstants.LOGIN_REQUEST, name } }
    function success(name) { return { type: userConstants.LOGIN_SUCCESS, name } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userServices.logout()
    history.push('/')
    return {type:userConstants.LOGOUT}
}

function checktoken(){
    return dispatch =>{
        //Function checks if theJWT token exist and if so it returns it
        const token = userServices.getToken()
        if(!token){
            dispatch(failure("No token"))
        }
        else{
            dispatch(request('To change'))
            // Using the checktoken service function to check the token's validity
            userServices.checktoken(token)
            .then((user)=>{
                dispatch(success(user.name))
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
    function request(token) { return { type: userConstants.CHECK_TOKEN_REQUEST, token } }
    function success(name) { return { type: userConstants.CHECK_TOKEN_SUCCESS, name } }
    function failure(error) { return { type: userConstants.CHECK_TOKEN_FAILURE, error } }
}



export { userConstants } 
export default userActions