import React, {Component, Proptypes} from 'react'
import { connect } from 'react-redux'
import Search from './../components/Search'
import { userSearch, fetchUserIfNeeded } from './../actions/exploreAction'
import UserSummaryList from './../components/UserSummaryList'

class Explore extends Component {
	constructor(props) {
		super(props)
		this.scrollFunc = this.handleScroll.bind(this)
	}

	componentDidMount(){
		const { dispatch } = this.props
		dispatch(userSearch({}))
	}

	handleScroll(){
		const { dispatch, userPageNumber } = this.props

		var name = $("#userName").val();
		var role = $("#userRole").val();
		var skills = []
		skills.push.apply(skills, ($("#userSkills").val().split(",")));
		var queryCondition = {
			name,
			role,
			skills
		}

		dispatch(fetchUserIfNeeded(queryCondition, userPageNumber))
	}

	render() {
		const { dispatch, users, isFetchingUser } = this.props
		return (
			<div className="container">
				<Search onUserSearch={(queryCondition, userPageNumber)=>{dispatch(userSearch(queryCondition, userPageNumber))}} />
				<UserSummaryList users={users} isFetchingUser={isFetchingUser} scrollFunc={this.scrollFunc} />
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		users: state.userList.users,
		isFetchingUser: state.userList.isFetchingUser,
		userPageNumber: state.userList.userPageNumber
	}
}

export default connect(mapStateToProps)(Explore)