import React, {Component} from 'react'
import {Link} from 'react-router'

export default class UserSummary extends Component{
	constructor(props){
		super(props)
		this.props = props
	}

	render(){
		var profileUrl = "/user/"+this.props.user.userID
		return(
			<div className="col-md-3">
				<Link to={profileUrl} className=".user-summary-pic-container"><img className="user-summary-pic" src ="http://www.eurogeosurveys.org/wp-content/uploads/2014/02/default_profile_pic.jpg"></img></Link>
				<div>
					<div>Name: {this.props.user.name}</div>
					<div>Role: {this.props.user.role}</div>
					<div>Skill: {this.props.user.skills? this.props.user.skills.join(",") : ""}</div>
					<div>Name: {this.props.user.email}</div>
				</div>
			</div>
		)
	}
}