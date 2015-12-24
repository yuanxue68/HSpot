export const GET_USER_REVIEWS_FAILURE = 'GET_USER_REVIEWS_FAILURE'
export const GET_USER_REVIEWS_SUCCESS = 'GET_USER_REVIEWS_SUCCESS'

function getReviewsSuccess(reviews){
	return {
		type: GET_USER_REVIEWS_SUCCESS,
		reviews
	}
}

function getReviewsFailure(error){
	return {
		type: GET_USER_REVIEWS_FAILURE,
		error
	}
}

export function getUserReviews(userID){
	return function(dispatch){
		var url = "/api/user/"+userID+"/reviews"
		return $.ajax({
			url: url,
			dataType:"json",
			cache: "false",
			contentType:"application/json",
			method:"GET",
		}).done((data)=>{
			console.log(data)
			dispatch(getReviewsSuccess(data))
		}).fail((xhr, status, err)=>{
			dispatch(getReviewsFailure(xhr.responseText))
		})
	}
}


export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE'

function getUserInfoRequest(){
	return{
		type: GET_USER_INFO_REQUEST
	}
}

function getUserInfoSucess(myProfileInfo){
	return{
		type: GET_USER_INFO_SUCCESS,
		myProfileInfo
	}
}

function getUserInfoFailure(error){
	return {
		type: GET_USER_INFO_FAILURE,
		error
	}
}

export function getUserInfo(userID){
	return function(dispatch){
		dispatch(getUserInfoRequest())
		var url = '/api/user/'+userID
		return $.ajax({
			url: url,
			dataType:"json",
			cache: "false",
			contentType:"application/json",
			method:"GET",
		}).done((data)=>{
			if(!data.skills){
				data.skills=[];
			}
			dispatch(getUserInfoSucess(data))
		}).fail((xhr, status, err)=>{
			dispatch(getUserInfoFailure(xhr.responseText))
		})
	}
}