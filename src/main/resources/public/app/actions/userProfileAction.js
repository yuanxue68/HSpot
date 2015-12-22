export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE'

function getUserRequest(){
	return{
		type: GET_USER_INFO_REQUEST
	}
}

function getUserSucess(userProfileInfo){
	return{
		type: GET_USER_INFO_SUCCESS,
		userProfileInfo
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
			contentType:"application/json",
			method:"GET",
		}).done((data)=>{
			if(!data.skills){
				data.skills=[];
			}
			dispatch(getUserSucess(data))
		}).fail((xhr, status, err)=>{
			dispatch(getUserFailure(xhr.responseText))
		})
	}
}

export const UPLOAD_PROFILE_REQUEST= 'UPLOAD_PROFILE_REQUEST'
export const UPLOAD_PROFILE_FAILURE = 'UPLOAD_PROFILE_FAILURE'
export const UPLOAD_PROFILE_SUCCESS= 'UPLOAD_PROFILE_SUCCESS'

function uploadFailure(error){
	return {
		type:UPLOAD_PROFILE_FAILURE,
		error
	}
}

function uploadRequest(){
	return {
		type:UPLOAD_PROFILE_REQUEST,
	}
}

function uploadSuccess(){
	return {
		type:UPLOAD_PROFILE_SUCCESS
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
			contentType:"application/json",
			method:"GET",
		}).done((data)=>{
			if(!data.skills){
				data.skills=[];
			}
			dispatch(getUserSucess(data))
		}).fail((xhr, status, err)=>{
			dispatch(getUserFailure(xhr.responseText))
		})
	}
}

export function uploadProfilePic(file){
	return function(dispatch){
		console.log("in uploadProfilePic")
		console.log(file)
		dispatch(uploadRequest());
		console.log("return thunk")
		var fd = new FormData();
		var url = "/api/user/profilepic"
		fd.append('file',file);
		return $.ajax({
			url:url,
			data:fd,
	    dataType: 'text',	
			processData:false,
			contentType:false,
			method:'POST',
		}).done((data)=>{
			console.log("success upload")
			dispatch(uploadSuccess())
		}).fail((xhr, status, err)=>{
			console.log("fail upload")
			dispatch(uploadFailure(xhr.responseText))
		})
	}
}

export const GET_USER_REVIEWS_FAILURE = 'GET_USER_REVIEWS_FAILURE'
export const GET_USER_REVIEWS_SUCCESS= 'GET_USER_REVIEWS_SUCCESS'

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