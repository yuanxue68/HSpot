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
			return Object.assign({}, state, {
				userReviews: [...state.userReviews, action.review]
			})
		case ActionTypes.DELETE_USER_REVIEW_SUCCESS:
			var newReviews = []
			console.log(action)
			state.userReviews.forEach((review) => {
				if(review.reviewId != action.deletedId){				
					newReviews.push(review)
				}
			})
			return Object.assign({}, state, {
				userReviews: newReviews
			})
		default:
			return state
	}
}