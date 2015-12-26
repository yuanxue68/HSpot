import React, {Component} from 'react'

export default class ProfilePic extends Component{
	constructor(props){
		super(props)
		this.readerURL = readerURL.bind(this);
		this.uploadPicture = uploadPicture.bind(this);
	}

	render(){
		var upload
		if (this.props.onUploadProfilePic){
			upload = (
				<div>
					<input id="file-upload" className="file-upload" onChange={this.readerURL} type="file" accept="image/*"></input>
					<div onClick={this.uploadPicture}>Upload Image</div>
				</div>
			)
		} else {
			upload = null
		}

		return (
			<div>
				<div className="profile-pic-container">
					<img className="profile-pic" src="http://cdn.cutestpaw.com/wp-content/uploads/2012/07/l-Wittle-puppy-yawning.jpg" alt="Profile Picture"></img>
				</div>
				{ upload }
			</div>
		)
	}
}

function uploadPicture(){
		const {onUploadProfilePic, dispatch} = this.props
		var input = document.getElementById('file-upload')
		onUploadProfilePic(input.files[0])
}

function readerURL (){
	var input = document.getElementById('file-upload')
	
	if(input.files && input.files[0]){
		var reader = new FileReader()
		reader.onload = function(e){
			$(".profile-pic").attr("src", e.target.result)
		}

		reader.readAsDataURL(input.files[0]);
	}
}