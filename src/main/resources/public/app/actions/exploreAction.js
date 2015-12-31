export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

function searchRequest(){
	return {
		type: SEARCH_REQUEST
	}
}

function searchSuccess(data, paginate){
	return {
		type: SEARCH_SUCCESS,
		users: data,
		paginate
	}
}

function searchFailure(error){
	return {
		type: SEARCH_FAILURE,
		error
	}
}

export function userSearch(queryCondition, page = 0, paginate = false){
	return function(dispatch){
		dispatch(searchRequest())
		queryCondition.page=page
		return $.ajax({
			url:"/api/user",
			dataType:"json",
			cache: "false",
			contenttype:"application/json",
			traditional:true,
			method:"GET",
			data:queryCondition
		}).done((data)=>{
			if(paginate){
				dispatch(incrementPageNumber(page))
			}
			dispatch(searchSuccess(data, paginate))
		}).fail((xhr, status, err) => {
			dispatch(searchFailure(xhr.responseText))
		})
	}
}

export const INCREMENT_PAGE_NUMBER = 'INCREMENT_PAGE_NUMBER'

function incrementPageNumber(userPageNumber){
	return {
		type: INCREMENT_PAGE_NUMBER,
		userPageNumber
	}
}

export function fetchUserIfNeeded(queryCondition) {
    return (dispatch, getState) => {
        const {isFetchingUser, userPageNumber} = getState().userList
        if (!isFetchingUser) {
            return dispatch(userSearch(queryCondition, userPageNumber+1, true));
        }
    }
}