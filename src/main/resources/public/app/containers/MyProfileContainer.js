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
		const { dispatch, authed } = this.props
		if(authed.authed){
			dispatch(getMyInfo(authed.userID))
		}
	}

	componentWillReceiveProps(nextProps){
		const { dispatch, authed } = this.props
		if(nextProps.authed && nextProps.authed.userID != authed.userID && nextProps.authed.authed){
			dispatch(getMyInfo(nextProps.authed.userID))
		}

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