import React, { Component } from 'react'
import ProfilePic from './ProfilePic'
import ReviewsList from './ReviewsList'

export default class MyProfile extends Component{
	constructor(props){
		super(props)
		this.onEditMyInfo = this.onEditMyInfo.bind(this)
	}

	render(){
		var name, role, skills, edit, description, save, cancel
		const { myProfileInfo, onUploadProfilePic, onChangeMyInfoEditable, onCancelEditMyInfo, authed }= this.props

		if( !this.props.myProfileEditable ){
			name = (
				<div>{ myProfileInfo.name }</div>
			)

			description = (
				<div>{ myProfileInfo.description }</div>
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
				<input id="editName" className="form-control"  type="text" defaultValue={myProfileInfo.name}></input>
			)

			description = (
				<textarea id="descriptionTextArea" className="form-control" rows="6" defaultValue={myProfileInfo.description}></textarea>
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
				<input id="editSkills" className="form-control" type="text" defaultValue={myProfileInfo.skills.join(", ")}></input>
			)

			save = (
				<div onClick={ this.onEditMyInfo } className="btn small-margin">
					Save
				</div>
			)

			cancel = (
				<div onClick={ onCancelEditMyInfo } className="btn btn-red small-margin">
					Cancel
				</div>
			)
		}

		return(
			<div className="container userProfile">
				<div className="col-md-3">
					<ProfilePic userID={authed.userID} onUploadProfilePic={ onUploadProfilePic } />
				</div>
				<div className="col-md-8">
					<div>
							<div className="btn pull-right" onClick={ onChangeMyInfoEditable.bind(null,"name") }>
								Edit
							</div>
						<h3>My Name: </h3>
						<div className="well grey-font">
							{ name }
						</div>
					</div>
					<div>
						<h3>About Me: </h3>
						<div className="well grey-font">
							{ description }
						</div>
					</div>
					<div>
						<h3>My Role: </h3>
						<div className="well grey-font">
							{role}
						</div>
					</div>
					<div>
						<h3>My Skill: </h3>
						<div className="well grey-font">
							{skills}
						</div>
					</div>
					<div className="col-centered">
					{ save }
					{ cancel }
					</div>
				</div>
			</div>
		)
	}

	onEditMyInfo(){
		const { authed, onSubmiteEditMyInfo } = this.props
		var newName = $("#editName").val()
		var newRole = $("#editRole").val()
		var description = $("#descriptionTextArea").val()
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
			skills:newSkills,
			description: description.trim()
		}
		console.log(newMyProfileInfo)
		onSubmiteEditMyInfo(authed.userID, newMyProfileInfo)
	}
}

