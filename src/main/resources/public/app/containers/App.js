import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from './../components/Header'
import { pushState } from 'redux-router'
import { resetErrorMessage, userSignUp, userSignIn, userSignOut } from './../actions/indexAction'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(userSignIn({
      email:localStorage.getItem("userName"),
      password:localStorage.getItem("token")
    }))
  }

  handleDismissClick(e) {
    const { dispatch } = this.props
    dispatch(resetErrorMessage())
    e.preventDefault()
  }

  renderErrorMessage() {
    const { errorMessage } = this.props

    if (!errorMessage){
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
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
        {children}
      </div>
    )
  }

}

function mapStateToProps (state) {
  return {
    errorMessage: state.errorMessage,
    inputValue: state.router.location.pathname.substring(1),
    authed: state.authed,
    token: state.token
  }
}

export default connect(mapStateToProps)(App)