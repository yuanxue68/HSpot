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

function getUserInfoSucess(userProfileInfo){
	return{
		type: GET_USER_INFO_SUCCESS,
		userProfileInfo
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

export const SUBMIT_USER_REVIEW_REQUEST = 'ADD_USER_REVIEW_REQUEST'
export const SUBMIT_USER_REVIEW_SUCCESS = 'ADD_USER_REVIEW_SUCCESS'
export const SUBMIT_USER_REVIEW_FAILURE = 'ADD_USER_REVIEW_FAILURE'

function submitUserReviewSuccess(review){
	return {
		type:SUBMIT_USER_REVIEW_SUCCESS,
		review
	}
}

function submitUserReviewFailure(error){
	return {
		type:SUBMIT_USER_REVIEW_FAILURE,
		error
	}
}

function submitUserReviewRequest(){
	return {
		type:SUBMIT_USER_REVIEW_REQUEST
	}
}

export function submitUserReview(review, userID){
	return function(dispatch){
		dispatch(submitUserReviewRequest())
		var url = '/api/user/'+userID+'/reviews/'
		return $.ajax({
			url: url,
			dataType:"json",
			cache: "false",
			contentType:"application/json",
			method:"POST",
			data:JSON.stringify(review)
		}).done((data)=>{
			dispatch(submitUserReviewSuccess(data))
		}).fail((xhr, status, err)=>{
			dispatch(submitUserReviewFailure(xhr.responseText))
		})
	}
}

export const DELETE_USER_REVIEW_REQUEST = 'DELETE_USER_REVIEW_REQUEST'
export const DELETE_USER_REVIEW_SUCCESS = 'DELETE_USER_REVIEW_SUCCESS'
export const DELETE_USER_REVIEW_FAILURE = 'DELETE_USER_REVIEW_FAILURE'

function deleteUserReviewRequest(){
	return {
		type:DELETE_USER_REVIEW_REQUEST,
	}
}

function deleteUserReviewSuccess(deletedId){
	return {
		type:DELETE_USER_REVIEW_SUCCESS,
		deletedId
	}
}

function deleteUserReviewFailure(error){
	return {
		type:DELETE_USER_REVIEW_FAILURE,
		error
	}
}

export function deleteUserReview (userID, reviewID) {
	return function(dispatch){
		dispatch(deleteUserReviewRequest())
		var url = "/api/user/"+userID+"/reviews/"+reviewID
		return $.ajax({
			url:url,
			method: "DELETE"
		}).done((data) => {
			dispatch(deleteUserReviewSuccess(reviewID))
		}).fail((xhr, status, err) => {
			dispatch(deleteUserReviewFailure(xhr.responseText))
		})
	}
}

