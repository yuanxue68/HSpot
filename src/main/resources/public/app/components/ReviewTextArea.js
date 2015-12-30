import React, { Component } from 'react'

export default class ReviewTextArea extends Component{
	constructor(props){
		super(props)
		this.submitReview = this.submitReview.bind(this)
	}

	render(){
		const { authed, params } = this.props
		if(authed.userID && Number(params.id)!==Number(authed.userID)){
			return(
				<div>
					<div>
						<label for="reviewTextArea">Add A review</label>
						<textarea id="reviewTextArea" className="form-control">
						</textarea>
					</div>
					<button className="btn btn-default small-margin pull-right" onClick={ this.submitReview } >Submit</button>
				</div>
			)
		} else {
			return null
		}
	}

	submitReview(){
		const { authed, params, onSubmitUserReview } = this.props
		var reviewContent = $("#reviewTextArea").val()
		var review = {
			reviewContent,
			star:5,
			reviewReceiver: {
				userID: params.id,
			},
			reviewGiver: {
				userID: authed.userID
			}
		}
		$('#reviewTextArea').val('');
		onSubmitUserReview(review, params.id)
	}
}