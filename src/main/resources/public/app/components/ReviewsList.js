import React, {Component} from 'react'
import Review from './Review'

export default class ReviewsList extends Component{
	constructor(props){
		super(props)
	}
	render(){
		console.log(this.props)
		var reviews
		const { authed, onDeleteUserReview } = this.props
		if(this.props.reviews.length){
	 		reviews = this.props.reviews.map(function(review, index){
				return <Review 
					key={index} 
					review={review} 
					authed={authed} 
					onDeleteUserReview={ onDeleteUserReview } />
			})
		} else {
			reviews=null
		}
		return(
			<div>
				<br></br>
				<h3 className="bold">Reviews</h3>
				<div>
					{reviews}
				</div>
			</div>
		)
	}
}