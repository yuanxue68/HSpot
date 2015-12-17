import React, {Component} from 'react'

export default class UserProfile extends Component{
	constructor(props){
		super(props)
	}

	render(){
		var name 
		var role
		var skills
		const {userProfileInfo, userProfileEditable} = this.props
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