import React, { Component}  from 'react'
import MyProfile from './../components/MyProfile'
import { connect } from 'react-redux'
import { getMyInfo, uploadProfilePic, cancelEditMyinfo } from './../actions/myProfileAction'
import { changeMyInfoEditable, submitEditMyInfo } from './../actions/myProfileAction'


class MyProfileContainer extends Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		const { dispatch, params, authed } = this.props
		dispatch(getMyInfo(authed.userID))
	}

	render(){
		const { dispatch, myProfileInfo, myProfileEditable, authed, params } = this.props
	
		return (
			<MyProfile 
			params ={ params }
			authed = { authed }
			myProfileInfo = { myProfileInfo } 
			myProfileEditable = { myProfileEditable } 
			onUploadProfilePic = { (file) => dispatch(uploadProfilePic(file)) } 
			onChangeMyInfoEditable = { (editable) => dispatch( changeMyInfoEditable( editable )) }
			onSubmiteEditMyInfo ={ (userId, myProfileInfo) => dispatch(submitEditMyInfo(userId, myProfileInfo)) }
			onCancelEditMyInfo = { () => dispatch(cancelEditMyinfo()) } />
		)

	}
}

function mapStateToProps(state) {
	return{
		myProfileEditable: state.myProfile.myProfileEditable,
		myProfileInfo: state.myProfile.myProfileInfo,
		authed: state.authed
	}
}

export default connect(mapStateToProps)(MyProfileContainer)