export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

function searchRequest(){
	return {
		type: SEARCH_REQUEST
	}
}

function searchSuccess(data){
	return {
		type: SEARCH_SUCCESS,
		userList: data
	}
}

function searchFailure(error){
	return {
		type: SEARCH_FAILURE,
		error
	}
}

export function userSearch(queryCondition){
	return function(dispatch){
		dispatch(searchRequest())

		return $.ajax({
			url:"/api/user",
			dataType:"json",
			cache: "false",
			contenttype:"application/json",
			traditional:true,
			method:"GET",
			data:queryCondition
		}).done((data)=>{
			dispatch(searchSuccess(data))
		}).fail((xhr, status, err) => {
			console.log(err)
			console.log(status)
			console.log(xhr)
			dispatch(searchFailure(xhr.responseText))
		})
	}
}