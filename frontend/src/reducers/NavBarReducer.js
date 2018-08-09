import {navBarConstants} from '../actions/NavBarActions.js'

function navBarStatus(state = {open:false}, action){
	switch(action.type){
		case navBarConstants.TOGGLE_MENU:
			return {
				open: !state.open
			}
		default:
			return state
	}
}

export default navBarStatus