import {Component} from 'react'

import './index.css'

import {
  RegistrationContainer,
  ViewContainer,
  FormTitle,
  InputContainer,
  InputLabel,
  LoginButton,
  ErrorMessage,
  SuccessImage,
  LoginResult,
  BackButton,
} from './styledComponents'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    showUsernameError: false,
    showPasswordError: false,
    isFormSubmitted: false,
  }

  onBlurPassword = () => {
    const isValidPassword = this.validatePassword()

    this.setState({showPasswordError: !isValidPassword})
  }

  onChangePassword = event => {
    const {target} = event
    const {value} = target

    this.setState({
      password: value,
    })
  }

  renderPasswordField = () => {
    const {password, showUsernameError} = this.state
    const className = showUsernameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <InputContainer>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <input
          type="password"
          id="password"
          className={className}
          value={password}
          placeholder="Enter Your Password Here"
          onChange={this.onChangePassword}
          onBlur={this.onBlurPassword}
        />
      </InputContainer>
    )
  }

  onBlurUsername = () => {
    const isValidUsername = this.validateUsername()

    this.setState({showUsernameError: !isValidUsername})
  }

  onChangeUsername = event => {
    const {target} = event
    const {value} = target

    this.setState({
      username: value,
    })
  }

  renderUsernameField = () => {
    const {username, showUsernameError} = this.state
    const className = showUsernameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <InputContainer>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <input
          type="text"
          id="username"
          className={className}
          value={username}
          placeholder="Enter Your Username Here"
          onChange={this.onChangeUsername}
          onBlur={this.onBlurUsername}
        />
      </InputContainer>
    )
  }

  validatePassword = () => {
    const {password} = this.state

    return password !== ''
  }

  validateUsername = () => {
    const {username} = this.state

    return username !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidUsername = this.validateUsername()
    const isValidPassword = this.validatePassword()

    if (isValidUsername && isValidPassword) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showUsernameError: !isValidUsername,
        showPasswordError: !isValidPassword,
        isFormSubmitted: false,
      })
    }
  }

  renderLoginForm = () => {
    const {showUsernameError, showPasswordError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderUsernameField()}
        {showUsernameError && <ErrorMessage>Required</ErrorMessage>}
        {this.renderPasswordField()}
        {showPasswordError && <ErrorMessage>Required</ErrorMessage>}
        <LoginButton type="submit">Login</LoginButton>
      </form>
    )
  }

  onClickBack = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      username: '',
      password: '',
    }))
  }

  renderSubmissionSuccessView = () => {
    const {username} = this.state

    return (
      <>
        <SuccessImage
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-image"
        />
        <LoginResult>Hey {username} ! You Login Successfully</LoginResult>
        <BackButton type="button" onClick={this.onClickBack}>
          Back
        </BackButton>
      </>
    )
  }

  render() {
    const {isFormSubmitted} = this.state

    return (
      <RegistrationContainer>
        <img
          src="https://media.licdn.com/dms/image/C560BAQGhC4q9xaNyTg/company-logo_100_100/0/1647597976128?e=2147483647&v=beta&t=qUBlHNyoLDBp7IWBWFhQbUXlc_kMxEA0YNnfXfeEiqo"
          alt="logo"
        />
        <FormTitle>Login With Your Credentials</FormTitle>
        <ViewContainer>
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderLoginForm()}
        </ViewContainer>
      </RegistrationContainer>
    )
  }
}

export default RegistrationForm
