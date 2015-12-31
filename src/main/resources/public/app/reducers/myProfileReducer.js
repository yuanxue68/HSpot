import * as ActionTypes from './../actions/myProfileAction'

var initialState = {
	myProfileEditable:false,
	myProfileInfo:{
		name:"",
		role:"",
		skills:[],
		description:""
	}
}
export default function myProfile(state = initialState, action){
	const {type} = action
	switch(type) {
		case ActionTypes.GET_MY_INFO_SUCCESS:
			return Object.assign({}, state, {
				myProfileInfo: {
					name:action.myProfileInfo.name,
					role:action.myProfileInfo.role,
					skills: action.myProfileInfo.skills,
					description: action.myProfileInfo.description
				}
			})
		case ActionTypes.CHANGE_MY_INFO_EDITABLE:
			return Object.assign({},state, {
				myProfileEditable:true
			})
		case ActionTypes.SUBMIT_EDIT_MY_INFO_SUCCESS:
			var skills = []
			action.myProfileInfo.skills.forEach((skill) => {
				skills.push(skill.skillName)
			})
			return Object.assign({}, state, {
				myProfileInfo:{
					name: action.myProfileInfo.name,
					role: action.myProfileInfo.role,
					skills: skills,
					description: action.myProfileInfo.description
				},
				myProfileEditable:false
			})
		case ActionTypes.CANCEL_EDIT_MY_INFO:
			return Object.assign({}, state, {
				myProfileEditable:false
			})
		default:
			return state
	}
}