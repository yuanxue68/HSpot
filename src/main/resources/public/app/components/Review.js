import React, {Component} from 'react'

export default class extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const { authed, review, onDeleteUserReview } = this.props
		var deleteButton, editButton

		if(Number(authed.userID) === Number(review.reviewGiverID)){
			deleteButton = (<button type="button" className="close" onClick={ onDeleteUserReview.bind(null, authed.userID, review.reviewId) } >
				<span aria-hidden="true">&times;</span>
			</button>)
			editButton = (<a className="pull-right">Edit</a>)
		} else {
			deleteButton = null
			editButton = null
		}
		return(
			<div className="well">
				{deleteButton}
				{editButton}
				<div>{review.reviewContent}</div>
				<div>{review.star}</div>
			</div>
		)
	}
}