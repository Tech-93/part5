import React from 'react'
import Blog from './Blog'

const Render = ({ blogs, setBlogs }) => {

  const renderBlogs = () => blogs.map(blog =>
    <Blog key={blog.id} blog = {blog} blogs = {blogs} setBlogs = {setBlogs} />
  )

  return (
    <div> {renderBlogs()} </div>
  )
}

export default Render