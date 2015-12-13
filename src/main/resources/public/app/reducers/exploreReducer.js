import * as ActionTypes from './../actions/exploreAction'

export default function userList(state = [], action) {
	const {type} = action
	switch (type) {
		case ActionTypes.SEARCH_SUCCESS:
			return Object.assign([],action.userList)
		default: 
			return state
	}
}