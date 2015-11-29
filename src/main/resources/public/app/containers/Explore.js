import React, {Component, Proptypes}from 'react'
import {connect} from 'redux'
import Search from './../components/Search'

export default class Explore extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="container">
				<Search/>
			</div>
		)
	}
}