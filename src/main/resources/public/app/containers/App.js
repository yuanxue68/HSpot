import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from './../components/Header'
import { pushState } from 'redux-router'
import { resetErrorMessage } from './../actions/indexAction'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  handleChange(nextValue) {
    this.this.props.pushState(null,`/${nextValue}`)
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage()
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
    const { children, inputValue } = this.props
    return(
      <div className='container-fluid'>
        <Header/>
        {this.renderErrorMessage()}
        {children}
      </div>
    )
  }

}

App.propTypes = {
// Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps (state) {
  return {
    errorMessage: state.errorMessage,
    inputValue: state.router.location.pathname.substring(1)
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage,
  pushState
})(App)