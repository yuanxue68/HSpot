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
					reviews: action.userProfileInfo.reviews
				}
			})
		default:
			return state
	}
}