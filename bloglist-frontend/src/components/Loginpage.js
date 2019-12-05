import React from 'react'
import PropTypes from 'prop-types'




const loginForm = (props) => {




  return (
    <div>

      <h1> Login to application </h1>
      <form onSubmit={props.handleLogin}>
        <div>
            username
          <input
            type="text"
            value={props.username}
            name="Username"
            onChange={({ target }) => props.setUsername(target.value)}
          />
        </div>
        <div>
            password
          <input
            type="password"
            value={props.password}
            name="Password"
            onChange={({ target }) => props.setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default loginForm