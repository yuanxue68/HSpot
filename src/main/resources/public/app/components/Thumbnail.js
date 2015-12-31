import React, { Component } from 'react'

export default class Thumbnail extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="thumbnail-container">
				<img src={"/api/images/thumbnail/"+this.props.userID}></img>
			</div>
		)
	}
}