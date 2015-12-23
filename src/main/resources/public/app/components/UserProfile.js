import React, {Component} from 'react'
import ProfilePic from './ProfilePic'
import ReviewsList from './ReviewsList'

export default class UserProfile extends Component{
	constructor(props){
		super(props)
		this.onEditUser=this.onEditUser.bind(this)
	}

	render(){
		var name, role, skills, edit, save
		const {userProfileInfo, onUploadProfilePic, onChangeUserEditable, authed}= this.props
		console.log(this.props)
		if(Number(authed.userID) === Number(this.props.params.id)){
			edit = <div className="btn btn-default">Edit</div>
		} else {
			edit = null
		}

		if(!this.props.userProfileEditable){
			name = (
				<div>{userProfileInfo.name}</div>
			)

			role = (
				<div>{userProfileInfo.role}</div>
			)

			skills = (
				<div>{userProfileInfo.skills.join(", ")}</div>
			)

			save = null
		} else {
			name = (
				<input id="editName" type="text" defaultValue={userProfileInfo.name}></input>
			)

			role = (
						<select id="editRole" className="form-control" defaultValue={userProfileInfo.role}>
							<option ></option>
							<option >BackEnd</option>
							<option >FrontEnd</option>
							<option >Mobile</option>
							<option >Designer</option>
							<option >other</option>
						</select>			
			)

			skills = (
				<input id="editSkills" type="text" defaultValue={userProfileInfo.skills.join(", ")}></input>
			)

			save = (
				<div onClick={this.onEditUser} className="btn btn-default col-md-6">
					Save
				</div>
			)
		}

		return(
			<div className="container">
				<ProfilePic onUploadProfilePic={onUploadProfilePic}/>
				<div className="col-md-7">
					<div>
						<h3>My Name: </h3>
						<div className="well">
						{name}
							<div onClick={onChangeUserEditable.bind(null,"name")}>
								{edit}		
							</div>
						</div>
					</div>
					<div>
						<h3>My Role: </h3>
						<div className="well">
							{role}
						</div>
					</div>
					<div>
						<h3>My Skill: </h3>
						<div className="well">
							{skills}
						</div>
					</div>
					{save}
					<ReviewsList reviews={userProfileInfo.reviews}/>
				</div>
			</div>
		)
	}

	onEditUser(){
		const {authed, onSubmiteEditUser} = this.props
		var newName = $("#editName").val()
		var newRole = $("#editRole").val()
		var newSkills =[]
		console.log($("#editSkills").val())
		if($("#editSkills").val().split(",").length>0)
		{
			$("#editSkills").val().split(",").forEach(function(skill){
				console.log("in array")
				newSkills.push({
					user:authed.userID,
					skillName:skill
				})
			})
		} 
		var newUserProfileInfo = {
			name:newName,
			role:newRole,
			skills:newSkills
		}
		console.log(newUserProfileInfo)
		onSubmiteEditUser(authed.userID, newUserProfileInfo)
	}
}

