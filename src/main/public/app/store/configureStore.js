import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import DevTools from './../containers/DevTools'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const finalCreateStore = compose(
	applyMiddleware(thunk),
	reduxReactRouter({routes, createHistory}),
	applyMiddleware(createLogger()),
	Devtools.instrument()
)(createStore)

export default function configureStore(initialState) {
	const store = finalCreateStore(rootReducer, initialState)
	return store
}