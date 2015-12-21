import React, {Component} from 'react'

export default class Search extends Component{
	constructor(props){
		super(props)
		this.submitUserSearch = this.submitUserSearch.bind(this)
	}

	render(){
		return(
			<div>
				<h3 className="col-centered">Search For Your Next Partner</h3>
				<div className="row">
					<div className="form-group col-md-3">
						<label htmlFor="">Name</label>
						<input id="userName" className="form-control" type="text" placeholder="Developer name if you know it"/>
					</div>
					<div className="form-group col-md-3">
						<label htmlFor="">Role</label>
						<select id="userRole" className="form-control">
							<option ></option>
							<option >BackEnd</option>
							<option >FrontEnd</option>
							<option >Mobile</option>
							<option >Designer</option>
							<option >other</option>
						</select>
					</div>
					<div className="form-group col-md-3">
						<label htmlFor="">Skill</label>
						<input id="userSkills" className="form-control" type="text" placeholder="Ruby on Rails, Angular.JS etc"/>
					</div>
					<div className="col-md-3 form-group" onClick={this.submitUserSearch}>
						<label htmlFor="">GO NOW!</label>
						<div className="btn btn-default form-control">Search</div>
					</div>
				</div>

			</div>
		)
	}

	submitUserSearch(){
		var name = $("#userName").val();
		var role = $("#userRole").val();
		var skills = []
		skills.push.apply(skills, ($("#userSkills").val().split(",")));
		console.log(skills)
		var queryCondition = {
			name,
			role,
			skills
		}

		this.props.onUserSearch(queryCondition)
	}
}