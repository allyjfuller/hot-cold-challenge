// index.js combines all reducers into one

import { combineReducers } from 'redux'
import app from './app'
// import next reducer here
import guessForm from './guess-form'

const rootReducer = combineReducers({
	// assigns this key to line 4
	app,
	guessForm
	// pass next reducer as a key here
})

export default rootReducer