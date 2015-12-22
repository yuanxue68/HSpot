import React, {Component, Proptypes}from 'react'
import { connect } from 'react-redux'
import Search from './../components/Search'
import { userSearch } from './../actions/exploreAction'
import UserSummaryList from './../components/UserSummaryList'

class Explore extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount(){
		const { dispatch } = this.props
		dispatch(userSearch({}))
	}

	render() {
		const { dispatch, userList } = this.props
		console.log(userList)
		return (
			<div className="container">
				<Search onUserSearch={(queryCondition)=>{dispatch(userSearch(queryCondition))}} />
				<UserSummaryList userList={userList}/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		userList: state.userList
	}
}

export default connect(mapStateToProps)(Explore)