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

export function getMessages(userID, type){
	return function(dispatch){
		dispatch(getMessagesRequest())

		return $.ajax({
			url:"/api/user/"+userID+"/messages",
			dataType:"json",
			contenttype:"application/json",
			method:"GET",
			traditonal:true,
			data:{
				type
			}
		}).done((data) => {
			dispatch(getMessagesSuccess(data))
		}).fail((xhr, status, err) => {
			dispatch(getMessagesFailure(xhr.responseText))
		})
	}
}