import React, {Component, Proptypes}from 'react'
import { connect } from 'react-redux'
import Search from './../components/Search'
import { userSearch } from './../actions/exploreAction'

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
		return (
			<div className="container">
				<Search onUserSearch={(queryCondition)=>{dispatch(userSearch(queryCondition))}} />
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