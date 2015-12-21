import React, {Component} from 'react'
import Review from './Review'

export default class extends Component{
	constructor(props){
		super(props)
	}
	render(){
		var reviews = this.props.reviews.map(function(review){
			return <Review review={review}/>
		})
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