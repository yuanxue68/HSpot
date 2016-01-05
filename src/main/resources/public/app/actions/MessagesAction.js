export const RECEIVED_MESSAGES = 'received'
export const SENT_MESSAGES = 'sent'

export const GET_MESSAGES_REQUEST = 'GET_RECEIVED_MESSAGES_REQUEST'
export const GET_MESSAGES_SUCCEESS = 'GET_RECEIVED_MESSAGES_SUCCEESS'
export const GET_MESSAGES_FAILURE = 'GET_RECEIVED_MESSAGES_FAILURE'

function getMessagesRequest(){
	return {
		type: GET_MESSAGES_REQUEST
	}
}

function getMessagesFailure(error){
	return {
		type: GET_MESSAGES_FAILURE,
		error
	}
}

function getMessagesSuccess(messages){
	return {
		type: GET_MESSAGES_SUCCEESS,
		messages
	}
}

export function getMessages(type, page = 0, searchString = ''){
	return function(dispatch){
		dispatch(getMessagesRequest())

		return $.ajax({
			url:"/api/messages",
			dataType:"json",
			contenttype:"application/json",
			method:"GET",
			traditonal:true,
			data:{
				type,
				page,
				searchString
			}
		}).done((data) => {
			dispatch(getMessagesSuccess(data))
		}).fail((xhr, status, err) => {
			dispatch(getMessagesFailure(xhr.responseText))
		})
	}
}

export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE'

function sendMessageRequest(){
	return {
		type:SEND_MESSAGE_REQUEST
	}
}

function sendMessageSuccess(){
	return {
		type:SEND_MESSAGE_SUCCESS,
		notification: "Message was sent successfully!"
	}
}

function sendMessageFailure(error){
	return {
		type: SEND_MESSAGE_FAILURE,
		error
	}
}

export function sendMessage(content){
	return function(dispatch){
		dispatch(sendMessageRequest())
		return $.ajax({
			url:"/api/messages",
			dataType:"json",
			contentType:"application/json",
			method:"POST",
			data: JSON.stringify(content)
		}).done((data) => {
			dispatch(sendMessageSuccess())
		}).fail((xhr, status, err) => {
			dispatch(sendMessageFailure(xhr.responseText))
		})
	}
}

export const CHANGE_MESSAGE_TAB = 'CHANGE_MESSAGE_TAB'

function changeTab(tab){
	return {
		type: CHANGE_MESSAGE_TAB,
		tab
	}
}
export function changeMessageTab(tab){
	return function(dispatch){
		dispatch(changeTab(tab))
		dispatch(getMessages(tab))
	}
}

export const GET_MESSAGE_DETAIL_SUCCESS = 'GET_MESSAGES_SUCCESS'
export const GET_MESSAGE_DETAIL_FAILURE = 'GET_MESSAGES_FAILURE'

function getMessageDetailSuccess(message){
	return {
		type:GET_MESSAGE_DETAIL_SUCCESS,
		message
	}
}

function getMessageDetailFailure(error){
	return {
		type:GET_MESSAGE_DETAIL_FAILURE,
		error
	}
}

export function getMessageDetail(messageID){
	return function(dispatch){
		return $.ajax({
			url:"/api/messages/"+messageID,
			contentType:"application/json",
			dataType:"json",
			method: "GET"
		}).done((data) => {
			dispatch(getMessageDetailSuccess(data))
		}).fail((xhr, status, err) => {
			dispatch(getMessageDetailFailure(xhr.responseText))
		})
	}
}
