import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'
/*import Render from './Render'*/
import Blog from './Blog'
import BlogForm from './BlogForm'
import Notification from './Notification'
import '../index.css'

const Loginpage = () => {

  const [blogs, setBlogs] = useState([])
  const [message, setMessage] = useState('')
  const [blogFormVisible, setBlogFormVisible] = useState(false)

  const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
  const user = JSON.parse(loggedUserJSON)

  const hideWhenVisible = { display: blogFormVisible ? 'none' : '' }
  const showWhenVisible = { display: blogFormVisible ? '' : 'none' }





  useEffect(() => {
    blogService.getAll().then(response => {
      const sortedBlogs = response.data.sort((a,b) => b.likes - a.likes )
      setBlogs(sortedBlogs)
    })
  }, [])





  console.log('added ', blogs.length, 'blogs')
  console.log(blogs)






  const handleLikes = id => {
    const blog = blogs.find(blog => blog.id === id)
    const updateLike = { ...blog, likes: blog.likes + 1 }
    blogService.update(id, updateLike).then(response =>
      setBlogs(blogs.map(blog => blog.id !== id ? blog : response.data))
    )
    const sortedBlogs = blogs.sort((a,b) => b.likes - a.likes)
    setBlogs(sortedBlogs)
  }

  const handleRemove = id => {
    const blog = blogs.find(blog => blog.id === id)
    if(user.username === blog.user.username){
      var conf = window.confirm('remove ' + blog.title + '' + blog.author)
      if(conf){
        blogService.remove(id)
        setBlogs(blogs.filter(blog => blog.id !== id))
      }
    }
  }






  const Render = () => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    const user = JSON.parse(loggedUserJSON)
    const renderBlogs = () => blogs.map(blog =>
      <Blog key={blog.id} blog = {blog} handleLikes = {handleLikes} handleRemove = {handleRemove} user={user}  />
    )

    return (
      <div> {renderBlogs()} </div>
    )
  }






  const Logout = () => {
    window.localStorage.clear()
    window.location.reload()
  }






  return (
    <div>
      <h1> blogs </h1>

      <Notification message = {message} />

      <p>
        {user.username} logged in
        <button onClick={Logout}> logout  </button>
      </p>

      <h2> create new </h2>

      <div style={hideWhenVisible}>
        <button onClick={() => setBlogFormVisible(true)}>new blog</button>
      </div>

      <div style={showWhenVisible}>
        <BlogForm
          blogs = {blogs}
          setMessage = {setMessage}
          setBlogs = {setBlogs}
        />
        <button onClick={() => setBlogFormVisible(false)}>cancel</button>
      </div>

      <Render blogs = {blogs} setBlogs = {setBlogs} />

    </div>
  )
}

export default Loginpage