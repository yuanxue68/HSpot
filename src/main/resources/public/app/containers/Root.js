import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import DevTools from './DevTools'

export default class Root extends Component {
	constructor(props){
		super(props)
	}

	render() {
		const { store } = this.props
		return (
			<Provider store ={store}>
				<div>
					<ReduxRouter/>
					<DevTools/>
				</div>
			</Provider>
		)
	}
}

Root.PropTypes = {
	store: PropTypes.object.isRequired
}