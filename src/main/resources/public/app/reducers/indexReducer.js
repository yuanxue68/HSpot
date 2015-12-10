import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux'
import * as ActionTypes from './../actions/indexAction'


const rootReducer = combineReducers({
	router,
	errorMessage,
	authed
})
export default rootReducer

function errorMessage(state = null, action) {
	const {type, error} = action
	if (type === ActionTypes.RESET_ERROR_MESSAGE) {
		return null
	} else if (error) {
		return action.error
	}
	return state
}

function authed(state = {authed:false}, action) {
	const {type} = action
	switch (type) {
		case ActionTypes.SIGN_UP_FAILURE:
			return Object.assign({}, state, {
				authed:false
			})
		case ActionTypes.SIGN_UP_SUCCESS:
			return Object.assign({},state, {
				authed:true
			})
		case ActionTypes.SIGN_IN_SUCCESS:
			return Object.assign({}, state, {
				authed:true
			})
		case ActionTypes.SIGN_IN_FAILURE:
			return Object.assign({}, state, {
				authed:false
			})
		case ActionTypes.SIGN_OUT:
			return Object.assign({}, state, {
				authed:false
			})
		default:
			return state
	}
}