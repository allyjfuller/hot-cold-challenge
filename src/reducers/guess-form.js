// create a variable for initial state
// reducers job is to manage and update the state when an action happens

const initialState = {
// initial state variable equal to an object (data) that has an empty array
// ask about this in session and in reducers/app.js
	data: []
}

// create the actual reducer
const guessForm = (state = initialState, action) => {
// this reducer is going to be managing and updating whatever
// is inside initialState because we've assigned it to the state
	// use switch statement
	switch(action.type) {
		// individual cases - listen for MAKE_GUESS case
		case 'MAKE_GUESS':
		/* dont change the previous state - copy it, change what you want,
		and then return a new state (aka never mutate the state) */

		return {
			// copy previous state with spread operator
			...state,
			// adding makeGuess
			// copying the previous values
			// updating the data key
			// makeGuess is equal to action.makeGuess which comes from our action
			// ask about this next session
			data: [...state.data, {makeGuess: action.makeGuess}]
		}	
}		

		// need default case
		default:
		// returning state which is equal to initialState on line 11
		return state
	}
}

// export reducer
export default guessForm

// REDUCERS JOB IS TO LISTEN FOR ACTIONS AND UPDATE THE STATE ACCORDINGLY //