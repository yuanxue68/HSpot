import * as ActionTypes from './../actions/userProfileAction'

var initialState = {
	userReviews: [],
	userProfileInfo: {
		name: "",
		role: "",
		skills: []
	}
}

export default function userProfile (state = initialState, action){
	const { type } = action
	switch (type) {
		case ActionTypes.GET_USER_INFO_SUCCESS:
			return Object.assign({}, state, {
				userProfileInfo: {
					name:action.userProfileInfo.name,
					role:action.userProfileInfo.role,
					skills: action.userProfileInfo.skills,
				}
			})
		case ActionTypes.GET_USER_REVIEWS_SUCCESS:
			return Object.assign({}, state, {
				userReviews: action.reviews
			})
		case ActionTypes.SUBMIT_USER_REVIEW_SUCCESS:
			return Object.assign({},state, {
				userReviews: [...state.userReviews, action.review]
			})
		default:
			return state
	}
}