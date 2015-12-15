import React, {Component} from 'react'

export default class UserProfile extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		var name 
		var role
		var skills
		const {userProfile} = this.props
		if(this.props.userProfileEditable.name){
			<div>{userProfile.name}</div>
		} else {
			<input type="text" value={userProfile.name}></input>
		}

		if(this.props.userProfileEditable.role){
			<div>{userProfile.role}</div>
		} else {
			<input type="text" value={userProfile.role}></input>
		}

		if(this.props.userProfileEditable.skills){
			<div>{userProfile.skills.join(", ")}</div>
		} else {
			<input type="text" value={userProfile.skills.join(", ")}></input>
		}



		return(
			<div>
				<div>
					<div>My Name: </div>
					{name}
				</div>
				<div>
					<div>My Role: </div>
					{role}
				</div>
				<div>
					<div>My Skill: </div>
					{skills}
				</div>
			</div>
		)
	}
}