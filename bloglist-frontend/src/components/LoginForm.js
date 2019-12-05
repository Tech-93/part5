import React from 'react'
import PropTypes from 'prop-types'




const LoginForm = (props) => {




  return (
    <div>

      <h1> Login to application </h1>
      <form onSubmit={props.handleLogin}>
        <div>
            username
          <input {...props.username.omitreset}
            name="Username"
          />
        </div>
        <div>
            password
          <input {...props.password.omitreset}
            name="Password"
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  username: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  handleLogin: PropTypes.func.isRequired
}


export default LoginForm