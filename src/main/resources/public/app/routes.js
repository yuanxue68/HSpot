import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './components/Home'
import Explore from './containers/Explore'
import MyProfileContainer from './containers/MyProfileContainer'
import UserProfileContainer from './containers/UserProfileContainer'
import MyMessagesContainer from './containers/MyMessagesContainer'



export default (
	<Route path="/" component = {App} >
		<IndexRoute component={Home}/>
		<Route path="user" component={Explore}/>
		<Route path="myprofile" component={MyProfileContainer}/>
		<Route path="mymessages/:messagetype/:page" component={MyMessagesContainer}/>
		<Route path="user/:id" component={UserProfileContainer}/>
	</Route>
)