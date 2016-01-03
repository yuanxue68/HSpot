import * as ActionTypes from './../actions/MessagesAction'

var initialState = {
	sentOrReceived: ActionTypes.RECEIVED_MESSAGES,
	messages:[],
	messagePageNumber: 0 
}

export default function messageList(state = initialState, action){
	const { type } = action
	switch( type ) {
		default: 
			return state
	}
}

