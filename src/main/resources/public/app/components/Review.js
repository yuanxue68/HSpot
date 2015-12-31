import React, {Component} from 'react'
import Thumbnail from './Thumbnail'

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
				<Thumbnail userID={review.reviewGiverID} />
				<span>{review.reviewContent}</span>
				<div>{review.star}</div>
			</div>
		)
	}
}