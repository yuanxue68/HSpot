export const GET_MY_INFO_REQUEST = 'GET_MY_INFO_REQUEST'
export const GET_MY_INFO_SUCCESS = 'GET_MY_INFO_SUCCESS'
export const GET_MY_INFO_FAILURE = 'GET_MY_INFO_FAILURE'

function getMyInfoRequest(){
	return{
		type: GET_MY_INFO_REQUEST
	}
}

function getMyInfoSucess(myProfileInfo){
	return{
		type: GET_MY_INFO_SUCCESS,
		myProfileInfo
	}
}

function getMyInfoFailure(error){
	return {
		type: GET_MY_INFO_FAILURE,
		error
	}
}

export function getMyInfo(userID){
	return function(dispatch){
		dispatch(getMyInfoRequest())
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
			dispatch(getMyInfoSucess(data))
		}).fail((xhr, status, err)=>{
			dispatch(getMyInfoFailure(xhr.responseText))
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

/*export function getUserInfo(userID){
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
}*/

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

export const CHANGE_MY_INFO_EDITABLE = 'CHANGE_MY_INFO_EDITABLE'

export function changeMyInfoEditable(){
	return {
		type: CHANGE_MY_INFO_EDITABLE
	}
}

export const SUBMIT_EDIT_MY_INFO_REQUEST = "SUBMIT_EDIT_MY_INFO_REQUEST"
export const SUBMIT_EDIT_MY_INFO_FAILURE = "SUBMIT_EDIT_MY_INFO_FAILURE"
export const SUBMIT_EDIT_MY_INFO_SUCCESS = "SUBMIT_EDIT_MY_INFO_SUCCESS"

export function editMyInfoSuccess(myProfileInfo){
	return {
		type: SUBMIT_EDIT_MY_INFO_SUCCESS,
		myProfileInfo
	}
}

export function editMyInfoFailure(error){
	return {
		type: SUBMIT_EDIT_MY_INFO_FAILURE,
		error
	}
}

export function editMyInfoRequest(){
	return {
		type: SUBMIT_EDIT_MY_INFO_REQUEST
	}
}

export function submitEditMyInfo(userId,myProfileInfo){
	console.log(myProfileInfo)
	return function (dispatch){
		dispatch(editMyInfoRequest())
		var url = "/api/user/"+userId
		return $.ajax({
			url:url,
			data:JSON.stringify(myProfileInfo),
			dataType:"json",
			traditional:true,
			contentType:"application/json",
			method:"PUT",
		}).done((data)=>{
			dispatch(editMyInfoSuccess(myProfileInfo))
		}).fail((xhr, status, err)=>{
			dispatch(editMyInfoFailure(xhr.responseText))
		})
	}
}

