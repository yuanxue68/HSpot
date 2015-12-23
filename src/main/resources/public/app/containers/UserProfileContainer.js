import React, {Component} from 'react'
import UserProfile from './../components/UserProfile'
import { connect } from 'react-redux'
import { getUserInfo, uploadProfilePic, getUserReviews, changeUserEditable, submitEditUser } from './../actions/userProfileAction'


class UserProfileContainer extends Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		const { dispatch, params} = this.props
		dispatch(getUserInfo(params.id))
		dispatch(getUserReviews(params.id))
	}

	render(){
		const {dispatch, userProfileInfo, userProfileEditable, authed, params} = this.props
		console.log(this.props)
	
		return (
			<UserProfile 
			params={params}
			authed={authed}
			userProfileInfo={userProfileInfo} 
			userProfileEditable={userProfileEditable} 
			onUploadProfilePic={(file)=>dispatch(uploadProfilePic(file))} 
			onChangeUserEditable = {(editable)=>dispatch( changeUserEditable(editable) )}
			onSubmiteEditUser={(userId, userProfileInfo)=>dispatch(submitEditUser(userId, userProfileInfo))}/>
		)

	}
}

function mapStateToProps(state) {
	return{
		userProfileEditable: state.userProfile.userProfileEditable,
		userProfileInfo: state.userProfile.userProfileInfo,
		authed: state.authed
	}
}

export default connect(mapStateToProps)(UserProfileContainer)