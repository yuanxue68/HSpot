import React, {Component} from 'react'
import Review from './Review'

export default class ReviewsList extends Component{
	constructor(props){
		super(props)
	}
	render(){
		console.log(this.props)
		var reviews
		if(this.props.reviews.length){
	 		reviews = this.props.reviews.map(function(review){
				return <Review review={review}/>
			})
		} else {
			reviews=null
		}
		return(
			<div>
				<h3>Reviews</h3>
				<div>
					{reviews}
				</div>
			</div>
		)
	}
}