import React, { Component } from 'react'
import {Link} from 'react-router'

export default class Thumbnail extends Component {
	constructor(props){
		super(props)
		this.stopPropagation = this.stopPropagation.bind(this)
	}

	stopPropagation(e){
		e.stopPropagation()
	}

	render(){
		return(
			<Link to={"/user/"+this.props.userID} className="thumbnail-container" onClick={this.stopPropagation}>
				<img src={"/api/images/thumbnail/"+this.props.userID}></img>
			</Link>
		)
	}
}