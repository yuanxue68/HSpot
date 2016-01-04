import React, { Component } from 'react'
import { Link } from 'react-router'

export default class PageNavigator extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { params, url } = this.props
		var nextPage = Number(params.page) + 1
		var prevPage = params.page === "0" ? 0 : Number(params.page) - 1
		return(
			<div>
				<Link to={url+prevPage} className="fa fa-angle-left" ></Link>
				<Link to={url+nextPage} className="fa fa-angle-right" ></Link>
			</div>
		)
	}
}