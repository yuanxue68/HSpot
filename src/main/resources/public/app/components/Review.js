import React, {Component} from 'react'

export default class extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				<div>{this.props.review.reviewContent}</div>
				<div>{this.props.review.star}</div>
			</div>
		)
	}
}