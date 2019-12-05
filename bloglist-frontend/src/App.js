import React, { useState, useEffect } from 'react'
import  { useField } from './hooks'
import blogService from './services/blogs'
import loginService from './services/login'
import LoggedInPage from './components/LoggedInPage'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import './index.css'

const App = () => {

  const username = useField('text')
  const password = useField('password')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')






  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])




  const handleLogin = async (event) => {
    event.preventDefault()

    const userCredentials = {
      username: username.value,
      password: password.value
    }

    try {
      const user = await loginService.login(userCredentials)
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      console.log(username.value)
    } catch (exception) {
      setMessage('wrong username or password')
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }



  const loginPage = () => < LoginForm
    handleLogin = {handleLogin}
    username = {username}
    password = {password}
    message = {message} setMessage = {setMessage}
    user = {user}
  />


  const pageOnLogin = () => <LoggedInPage  />







  return(
    <div>
      <Notification message = {message} />
      {user === null && loginPage()}
      {user !== null && pageOnLogin()}
    </div>
  )

}

export default App
