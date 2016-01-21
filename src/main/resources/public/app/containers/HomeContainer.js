import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from './../components/Home'

class HomeContainer extends Component {
	constructor(props) {
		super(props)
	}

	render(){

		return(
			<Home authed={this.props.authed}/>
		)
	}
}

function mapStateToProps(state) {
	return {
		authed: state.authed
	}
}

export default connect(mapStateToProps)(HomeContainer)