 const navBarConstants = {
	OPEN_SIDE_MENU: 'NAVBAR_OPEN_SIDE_MENU',
	CLOSE_SIDE_MENU:'NAVBAR_CLOSE_SIDE_MENU',
}

function toggleMenu(open){
	return dispatch =>{
		if open
			dispatch(open())
		else
			dispatch(close())

	}
	function open() {return {type:navBarConstants.OPEN_SIDE_MENU}}
	function close() {return{type : navBarConstants.CLOSE_SIDE_MENU}}
}

export default toggleMenu