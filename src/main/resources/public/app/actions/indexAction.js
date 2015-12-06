export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  }
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_FAILURE	 = 'SIGN_UP_FAILURE'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'

function signUp (){
	return {
		type: SIGN_UP_REQUEST
	}
}

function signUpFailure(error){
	return {
		type: SIGN_UP_FAILURE,
		error
	}
}

function signUpSuccess(userInfo){
	return {
		type: SIGN_UP_SUCCESS,
		userInfo
	}
}

export function userSignUp(userInfo){
	return function(dispatch){
		//not used atm, useful for implementing spinning wheel while the request
		//wait for a response
		dispatch(signUp())

		return $.ajax({
			url:"/api/user",
			dataType:'json',
			cache:false,
			method:'POST',
			contentType: "application/json",
			data:JSON.stringify(userInfo)
		}).done((data) => {
			console.log(data)
			dispatch(signUpSuccess(data))
		}).fail((xhr, status, err) => {
			console.log(err)
			console.log(status)
			console.log(xhr)
			dispatch(signUpFailure(xhr.responseText))
		})

	}
}