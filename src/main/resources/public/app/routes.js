import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './components/Home'
import Explore from './containers/Explore'

export default (
	<Route path="/" component = {App} >
		<IndexRoute component={Home}/>
		<Route path="explore" component={Explore}/>
	</Route>
)