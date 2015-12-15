export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE'

function getUserRequest(){
	return{
		return{
			type: GET_USER_INFO_REQUEST
		}
	}
}

function getUserSucess(userProfile){
	return{
		type: GET_USER_INFO_SUCCESS
		userProfile
	}
}

function getUserFailure(error){
	return {
		type: GET_USER_INFO_FAILURE,
		error
	}
}

export function getUserInfo(userID){
	return function(dispatch){
		dispatch(getUserRequest())
		var url = '/api/user/'+userID
		return $.ajax({
			url: url,
			dataType:"json",
			cache: "false",
			contenttype:"application/json",
			method:"GET",
		}).done((data)=>{
			dispatch(getUserSucess(data))
		}).fail((xhr, status, err)=>{
			dispatch(getUserFailure(xhr.responseText))
		})
	}
}