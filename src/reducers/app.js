const initialState = {
// ask about this next session, also ask about 
	data: []
}

const restartGame = (state = initialState, action) => {
	switch(action.type) {
		case 'RESTART_GAME':

		return {
			...state,
			data: [...state.data, {restartGame: action.restartGame}]
		}

		default:
		return state
	}
}

export default restartGame