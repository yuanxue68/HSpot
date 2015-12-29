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
				<div className="user-summary-container">
					<Link to={profileUrl} className="user-summary-pic-container"><img className="user-summary-pic" src ="http://www.eurogeosurveys.org/wp-content/uploads/2014/02/default_profile_pic.jpg"></img></Link>
					<div className="user-summary-info">
						<div><span className="bold">Name: </span> <span className="grey-font">{this.props.user.name}</span></div>
						<div><span className="bold">Role: </span> <span className="grey-font">{this.props.user.role}</span></div>
						<div><span className="bold">Skills: </span> <span className="grey-font">{this.props.user.skills? this.props.user.skills.join(",") : " "}</span></div>
						<div><span className="bold">Name: </span> <span className="grey-font">{this.props.user.email}</span></div>
					</div>
				</div>
			</div>
		)
	}
}