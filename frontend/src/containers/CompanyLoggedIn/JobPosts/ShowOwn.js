import React, {Component} from 'react'
import {connect} from 'react-redux'
import ShowOwnPostsComponent from '../../../components/CompanyLoggedIn/ShowOwnPosts'
import companyJobPostActions from '../../../actions/companyJobPostsActions'


function mapDispatchToProps(dispatch){
	return({
		getPosts: ()=>{
			dispatch(companyJobPostActions.showOwnPosts())
		}})
}
function mapStateToProps(state){
	return state.companyJobPostsReducer
}


const ShowOwnPosts = connect(mapStateToProps, mapDispatchToProps)(ShowOwnPostsComponent)
export default ShowOwnPosts