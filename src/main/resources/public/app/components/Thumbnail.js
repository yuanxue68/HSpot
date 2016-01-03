import React, { Component } from 'react'
import {Link} from 'react-router'

export default class Thumbnail extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<Link to={"/user/"+this.props.userID} className="thumbnail-container">
				<img src={"/api/images/thumbnail/"+this.props.userID}></img>
			</Link>
		)
	}
}