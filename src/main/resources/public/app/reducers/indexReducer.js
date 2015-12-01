import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'


const rootReducer = combineReducers({
	router,
	errorMessage
})
export default rootReducer

function errorMessage(state = null, action) {
	const {type, errpr} = action
	if (type === ActionTypes.RESET_ERROR_MESSAGE) {
		return null
	} else if (error) {
		return action.error
	}

	return state
}