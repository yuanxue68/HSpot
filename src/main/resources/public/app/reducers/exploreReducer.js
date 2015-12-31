import * as ActionTypes from './../actions/exploreAction'

var initialState = {
	isFetchingUser:false,
	users:[],
	userPageNumber: 0
}

export default function userList(state = initialState, action) {
	const {type} = action
	switch (type) {
		case ActionTypes.SEARCH_SUCCESS:
			if(action.paginate){
				return Object.assign({}, state, {
					users: [...state.users, ...action.users],
					isFetchingUser: false
				})
			} else {
				return Object.assign({}, state, {
					users: action.users,
					isFetchingUser: false,
					userPageNumber: 0
				})
			}
		case ActionTypes.SEARCH_REQUEST:
			return Object.assign({}, state, {
				isFetchingUser: true
			})
		case ActionTypes.SEARCH_FAILURE:
			return Object.assign({}, state, {
				isFetchingUser: false
			})
		case ActionTypes.INCREMENT_PAGE_NUMBER:
			return Object.assign({}, state, {
				userPageNumber: state.userPageNumber+1
			})
		default: 
			return state
	}
}