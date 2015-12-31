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
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<div className="user-summary-container">
						<Link to={profileUrl} className="user-summary-pic-container"><img className="user-summary-pic" src ={"/api/images/profile/"+this.props.user.userID}></img></Link>
						<div className="user-summary-info">
							<div><span className="user-name">{this.props.user.name}</span></div>
							<div><span>Email: </span> <span className="grey-font">{this.props.user.email}</span></div>
							<div><span>Role: </span> <span className="grey-font">{this.props.user.role}</span></div>
							<div><span>Skills: </span> <span className="grey-font">{this.props.user.skills? this.props.user.skills.join(",") : " "}</span></div>
							<div><span>Description: </span> <span className="grey-font">{this.props.user.description && this.props.user.description.length>300? this.props.user.description.substring(0,300)+"..." : this.props.user.description}</span></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}