import React, { Component, PropTypes } from 'React'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import DevTools from './DevTools'

export default class Root extends Components {
	render() {
		const { store } = this.Props
		return (
			<Provider store ={store}>
				<ReduxRouter/>
				<DevTools/>
			</Provider>
		)
	}
}

Root.PropTypes = {
	store: PropTypes.object.isRequired
}