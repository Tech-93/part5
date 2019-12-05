import React from 'react'
import  { useField } from '../hooks'
import blogService from '../services/blogs'


const BlogForm = (props) => {
  const newTitle = useField('text')
  const newAuthor = useField('text')
  const newUrl = useField('text')




  const addBlog = async (event) => {
    event.preventDefault()

    const blogObject = {
      title: newTitle.value,
      author: newAuthor.value,
      url: newUrl.value
    }

    const response = await blogService.create(blogObject)
    props.setBlogs(props.blogs.concat(response))

    props.setMessage (
      'a new blog ' + newTitle.value + ' by ' + newAuthor.value + ' added'
    )

    setTimeout(() => {
      props.setMessage('')
      newTitle.value = ''
    }, 5000)
  }


  return (
    <div>
      <form onSubmit={addBlog}>
        <div> title: <input {...newTitle.omitreset} /> </div>
        <div> author: <input {...newAuthor.omitreset} /> </div>
        <div> url: <input { ...newUrl.omitreset} /> </div>
        <button type="submit"> create </button>
      </form>
    </div>
  )
}



export default BlogForm