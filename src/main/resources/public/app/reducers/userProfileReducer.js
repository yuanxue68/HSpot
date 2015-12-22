import * as ActionTypes from './../actions/userProfileAction'

var initialState = {
	userProfileEditable:{
		name:false,
		role:false,
		skills:false
	},
	userProfileInfo:{
		name:"",
		role:"",
		skills:[],
		reviews:[]
	}
}
export default function userProfile(state = initialState, action){
	const {type} = action
	switch(type) {
		case ActionTypes.GET_USER_INFO_SUCCESS:
			return Object.assign({}, state, {
				userProfileInfo: {
					name:action.userProfileInfo.name,
					role:action.userProfileInfo.role,
					skills: action.userProfileInfo.skills,
					reviews: state.userProfileInfo.reviews
				}
			})
		case ActionTypes.GET_USER_REVIEWS_SUCCESS:
			return Object.assign({}, state, {
				userProfileInfo:{
					name:state.userProfileInfo.name,
					role:state.userProfileInfo.role,
					skills: state.userProfileInfo.skills,
					reviews:action.reviews
				}
			})
		default:
			return state
	}
}