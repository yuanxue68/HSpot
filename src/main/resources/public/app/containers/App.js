import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from './../components/Header'
import { pushState } from 'redux-router'
import { resetErrorMessage, userSignUp } from './../actions/indexAction'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleDismissClick = this.handleDismissClick.bind(this)
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
    const { dispatch, children, inputValue } = this.props
    return(
      <div className="body">
        <Header onSignUp={(userInfo)=> dispatch(userSignUp(userInfo))}/>
        {this.renderErrorMessage()}
        {children}
      </div>
    )
  }

}

App.propTypes = {
  // Injected by React Redux
  dispatch: PropTypes.func.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps (state) {
  return {
    errorMessage: state.errorMessage,
    inputValue: state.router.location.pathname.substring(1),
    authed: state.authed
  }
}

export default connect(mapStateToProps)(App)