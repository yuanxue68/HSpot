import React, { Component } from 'react'
import ProfilePic from './ProfilePic'
import ReviewsList from './ReviewsList'

export default class MyProfile extends Component{
	constructor(props){
		super(props)
		this.onEditMyInfo = this.onEditMyInfo.bind(this)
	}

	render(){
		var name, role, skills, edit, save, cancel
		const { myProfileInfo, onUploadProfilePic, onChangeMyInfoEditable, onCancelEditMyInfo, authed }= this.props

		if( !this.props.myProfileEditable ){
			name = (
				<div>{ myProfileInfo.name }</div>
			)

			role = (
				<div>{ myProfileInfo.role }</div>
			)

			skills = (
				<div>{ myProfileInfo.skills.join(", ") }</div>
			)

			save = null
			cancel = null
		} else {
			name = (
				<input id="editName" type="text" defaultValue={myProfileInfo.name}></input>
			)

			role = (
						<select id="editRole" className="form-control" defaultValue={myProfileInfo.role}>
							<option ></option>
							<option value="BackEnd">BackEnd</option>
							<option value="FrontEnd">FrontEnd</option>
							<option value="Mobile">Mobile</option>
							<option value="Designer">Designer</option>
							<option value="Other">other</option>
						</select>			
			)

			skills = (
				<input id="editSkills" type="text" defaultValue={myProfileInfo.skills.join(", ")}></input>
			)

			save = (
				<div onClick={ this.onEditMyInfo } className="btn btn-default col-md-6">
					Save
				</div>
			)

			cancel = (
				<div onClick={ onCancelEditMyInfo } className="btn btn-default col-md-6">
					Cancel
				</div>
			)
		}

		return(
			<div className="container">
				<div className="col-md-3 col-md-offset-1">
					<ProfilePic onUploadProfilePic={ onUploadProfilePic } />
				</div>
				<div className="col-md-7">
					<div>
						<h3>My Name: </h3>
						<div className="well">
							{ name }
							<div className="btn btn-default" onClick={ onChangeMyInfoEditable.bind(null,"name") }>
								Edit
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
					{ save }
					{ cancel }
				</div>
			</div>
		)
	}

	onEditMyInfo(){
		const { authed, onSubmiteEditMyInfo } = this.props
		var newName = $("#editName").val()
		var newRole = $("#editRole").val()
		var newSkills =[]

		if($("#editSkills").val().split(",").length>0)
		{
			$("#editSkills").val().split(",").forEach(function(skill){
				console.log("in array")
				newSkills.push({
					user: authed.userID,
					skillName: skill.trim()
				})
			})
		} 
		var newMyProfileInfo = {
			name:newName,
			role:newRole,
			skills:newSkills
		}
		console.log(newMyProfileInfo)
		onSubmiteEditMyInfo(authed.userID, newMyProfileInfo)
	}
}

