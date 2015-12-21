import React, {Component} from 'react'
import ProfilePic from './ProfilePic'
import ReviewsList from './ReviewsList'

export default class UserProfile extends Component{
	constructor(props){
		super(props)
	}

	render(){
		var name 
		var role
		var skills
		const {userProfileInfo, userProfileEditable, onUploadProfilePic} = this.props
		console.log(this.props)
		if(!userProfileEditable.name){
			name = (<div>{userProfileInfo.name}</div>)
		} else {
			name = (<input type="text" value={userProfileInfo.name}></input>)
		}

		if(!userProfileEditable.role){
			role = (<div>{userProfileInfo.role}</div>)
		} else {
			role = (<input type="text" value={userProfileInfo.role}></input>)
		}

		if(!userProfileEditable.skills){
			skills = (<div>{userProfileInfo.skills.join(", ")}</div>)
		} else {
			skills = (<input type="text" value={userProfileInfo.skills.join(", ")}></input>)
		}



		return(
			<div className="container">
				<ProfilePic onUploadProfilePic={onUploadProfilePic}/>
				<div className="col-md-7">
					<div>
						<h3>My Name: </h3>
						<div className="well">{name}</div>
					</div>
					<div>
						<h3>My Role: </h3>
						<div className="well">{role}</div>
					</div>
					<div>
						<h3>My Skill: </h3>
						<div className="well">{skills}</div>
					</div>
					<ReviewsList reviews={userProfileInfo.reviews}/>
				</div>
			</div>
		)
	}
}