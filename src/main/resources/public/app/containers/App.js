import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from './../components/Header'
import { pushState } from 'redux-router'
import { resetErrorMessage, resetNotificationMessage } from './../actions/indexAction'
import { userSignUp, userSignIn, userSignOut } from './../actions/indexAction'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleDismissErrorClick = this.handleDismissErrorClick.bind(this)
    this.handleDismissNotificationClick = this.handleDismissNotificationClick.bind(this)
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(userSignIn({
      email:localStorage.getItem("userName"),
      password:localStorage.getItem("token")
    }))
  }

  handleDismissErrorClick(e) {
    const { dispatch } = this.props
    dispatch(resetErrorMessage())
    e.preventDefault()
  }

  handleDismissNotificationClick(e) {
    const { dispatch } = this.props
    dispatch(resetNotificationMessage())
    e.preventDefault()
  }

  renderErrorMessage() {
    const { errorMessage } = this.props

    if (!errorMessage){
      return null
    }

    return (
      <div className="col-md-10 col-md-offset-1 warning">
        <span>{errorMessage}</span>
        <button type="button" className="close" onClick={ this.handleDismissErrorClick } >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }


  renderNotification() {
    const { notificationMessage } = this.props

    if (!notificationMessage){
      return null
    }

    return (
      <div className="col-md-10 col-md-offset-1 notification">
        <span>{notificationMessage}</span>
        <button type="button" className="close" onClick={ this.handleDismissNotificationClick } >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }

  render(){
    const { dispatch, children, inputValue, authed, token } = this.props
    return(
      <div className="body">
        <Header onSignUp={(userInfo)=> dispatch(userSignUp(userInfo))} 
          onSignIn={(userInfo)=> dispatch(userSignIn(userInfo))} 
          onSignOut={()=>dispatch(userSignOut())} 
          authed={authed}
          token={token} />
        {this.renderErrorMessage()}
        {this.renderNotification()}
        {children}
      </div>
    )
  }

}

function mapStateToProps (state) {
  return {
    errorMessage: state.errorMessage,
    notificationMessage: state.notificationMessage,
    inputValue: state.router.location.pathname.substring(1),
    authed: state.authed,
    token: state.token
  }
}

export default connect(mapStateToProps)(App)