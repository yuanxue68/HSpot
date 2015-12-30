import React, {Component} from 'react'

export default class extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const { authed, review, onDeleteUserReview } = this.props
		var deleteButton

		if(Number(authed.userID) === Number(review.reviewGiverID)){
			deleteButton = (<button type="button" className="close" onClick={ onDeleteUserReview.bind(null, authed.userID, review.reviewId) } >
				<span aria-hidden="true">&times;</span>
			</button>)
		} else {
			deleteButton = null
		}
		return(
			<div className="well grey-font">
				{deleteButton}
				<div>{review.reviewContent}</div>
				<div>{review.star}</div>
			</div>
		)
	}
}