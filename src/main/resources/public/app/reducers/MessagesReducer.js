import * as ActionTypes from './../actions/MessagesAction'

var initialState = {
	sentOrReceived: ActionTypes.SENT_MESSAGES,
	messages:[],
	messagePageNumber: 0 
}

export default function messageList(state = initialState, action){
	const { type } = action
	switch( type ) {
		case ActionTypes.GET_MESSAGES_SUCCEESS:
			return Object.assign({}, state, {
				messages: action.messages
			})
		case ActionTypes.CHANGE_MESSAGE_TAB:
			return Object.assign({}, state, {
				sentOrReceived: action.tab
			})
		default: 
			return state
	}
}

