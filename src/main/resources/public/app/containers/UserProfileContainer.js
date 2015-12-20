import React, {Component} from 'react'
import UserProfile from './../components/UserProfile'
import { connect } from 'react-redux'
import { getUserInfo, uploadProfilePic } from './../actions/userProfileAction'


class UserProfileContainer extends Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		const { dispatch, params} = this.props
		dispatch(getUserInfo(params.id))
	}

	render(){
		const {dispatch, userProfileInfo, userProfileEditable} = this.props
		console.log(this.props)
	
		return (
			<UserProfile userProfileInfo={userProfileInfo} userProfileEditable={userProfileEditable} 
			onUploadProfilePic={(file)=>dispatch(uploadProfilePic(file))} />
		)

	}
}

function mapStateToProps(state) {
	return{
		userProfileEditable: state.userProfile.userProfileEditable,
		userProfileInfo: state.userProfile.userProfileInfo
	}
}

export default connect(mapStateToProps)(UserProfileContainer)