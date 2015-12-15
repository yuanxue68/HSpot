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

function signUpRequest (){
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

function signUpSuccess(token){
	return {
		type: SIGN_UP_SUCCESS,
		token
	}
}

export function userSignUp(userInfo){
	return function(dispatch){
		//not used atm, useful for implementing spinning wheel while the request
		//wait for a response
		dispatch(signUpRequest())

		return $.ajax({
			url:"/api/user",
			dataType:'json',
			cache:false,
			method:'POST',
			contentType: "application/json",
			username: userInfo.email,
			password: userInfo.password,
			data:JSON.stringify(userInfo)
		}).done((data) => {
			console.log(data)
			localStorage.setItem("userName",userInfo.email)
			localStorage.setItem("token",data.token)
			dispatch(signUpSuccess(data))
		}).fail((xhr, status, err) => {
			console.log(err)
			console.log(status)
			console.log(xhr)
			dispatch(signUpFailure(xhr.responseText))
		})

	}
}


export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_FAILURE = 'SIGN_UP_FAILURE'

function signInRequest (){
	return {
		type: SIGN_IN_REQUEST
	}
}

function signInFailure(error){
	return {
		type: SIGN_IN_FAILURE,
		error
	}
}

function signInSuccess(token){
	return {
		type: SIGN_IN_SUCCESS,
		token
	}
}

export function userSignIn(userInfo){
	return function(dispatch){
		dispatch(signInRequest())

		return $.ajax({
			url:"/api/token",
			dataType:'json',
			cache:false,
			method:'GET',
			contentType: "application/json",
			username: userInfo.email,
			password: userInfo.password,
			data:JSON.stringify(userInfo)
		}).done((data) => {
			console.log(data)
			localStorage.setItem("userName",userInfo.email)
			localStorage.setItem("token",data.token)
			dispatch(signInSuccess(data))
		}).fail((xhr, status, err) => {
			console.log(err)
			console.log(status)
			console.log(xhr)
			dispatch(signInFailure(xhr.responseText))
		})
	}
}

export const SIGN_OUT='SIGN_OUT'

function signOutRequest(){
	return{
		type: SIGN_OUT
	}
}

export function userSignOut(){
	return function(dispatch){
		localStorage.removeItem("username")
		localStorage.removeItem("token")

		return $.ajax({
			url:"/api/token",
			dataType:'json',
			cache:false,
			method:'GET',
			contentType: "application/json",
			username: "",
			password: "",
		}).done((data) => {
			dispatch(signOutRequest())
		}).fail((xhr, status, err) => {
			dispatch(signOutRequest())
		})
	}
}

