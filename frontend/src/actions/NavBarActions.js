 const navBarConstants = {
	TOGGLE_MENU: 'NAVBAR_TOGGLE_SIDE_MENU',
}

const navBarAction ={
	toggleMenu
}
function toggleMenu(){
	return dispatch =>{ dispatch(toggle()) }
	function toggle() {return {type:navBarConstants.TOGGLE_MENU}}
}

export {navBarConstants}
export default navBarAction