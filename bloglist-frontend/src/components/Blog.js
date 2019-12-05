import React, { useState } from 'react'


const Blog = ({ blog, handleLikes, handleRemove, user }) => {

  const [fullBlogInfo, setFullBlogInfo] = useState(false)


  const blogStyleBasicInfo = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    display: fullBlogInfo ? 'none' : ''
  }

  const blogStyleFullInfo = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    display: fullBlogInfo ? '' : 'none'
  }


  const showRemoveButton = () => {
    if(user.username === blog.user.username) {
      return(
        <button onClick={() => handleRemove(blog.id)}> remove </button>
      )}
  }






  return (
    <div>

      <div style={blogStyleBasicInfo} >
        <div onClick={() => setFullBlogInfo(true)} className="basicInfo">
          {blog.title} {blog.author}
        </div>
      </div>

      <div style={blogStyleFullInfo} className="fullInfo">
        <div onClick={() => setFullBlogInfo(false)} >
          <div> {blog.title} {blog.author} </div>
          <div> {blog.url} </div>
          <div>  {blog.likes} likes <button onClick={() => handleLikes(blog.id)} > like </button> </div>
          <div> added by {blog.user.name} </div>
          {showRemoveButton()}
        </div>
      </div>

    </div>
  )
}

export default Blog