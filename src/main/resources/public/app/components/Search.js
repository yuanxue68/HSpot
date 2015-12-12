import React, {Component} from 'react'

export default class Search extends Component{
	render(){
		return(
			<div>
				<h3 className="col-centered">Search For Your Next Partner</h3>
				<div className="form-group">
					<label htmlFor="">Name</label>
					<input className="form-control" type="text" placeholder="Developer name if you know it"/>
				</div>
				<div className="form-group">
					<label htmlFor="">Role</label>
					<select className="form-control">
						<option ></option>
						<option >BackEnd</option>
						<option >FrontEnd</option>
						<option >Mobile</option>
						<option >Designer</option>
						<option >other</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="">Skill</label>
					<input className="form-control" type="text" placeholder="Ruby on Rails, Angular.JS etc"/>
				</div>
			</div>
		)
	}
}