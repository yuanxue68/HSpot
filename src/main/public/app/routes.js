import React from 'react'
import { Route } from 'react-router'
import App from './container/App'
import UserPage from './containers/UserPage'

export default (
	<Route path="/" component = {App}
		<Route path="/:login/:name" component={UserPage}/>
	</Route>
)