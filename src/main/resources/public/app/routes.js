import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomeContainer from './containers/HomeContainer'
import Explore from './containers/Explore'
import MyProfileContainer from './containers/MyProfileContainer'
import UserProfileContainer from './containers/UserProfileContainer'
import MyMessagesContainer from './containers/MyMessagesContainer'
import { resetAllMessage } from './actions/indexAction'


export default (
	<Route path="/" component = {App} >
		<IndexRoute component={HomeContainer}/>
		<Route path="user" component={Explore}/>
		<Route path="myprofile" component={MyProfileContainer}/>
		<Route path="mymessages/:messagetype/:page" component={MyMessagesContainer}/>
		<Route path="user/:id" component={UserProfileContainer}/>
	</Route>
)