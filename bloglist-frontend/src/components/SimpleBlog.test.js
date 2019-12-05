import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

test('renders title and author of blog', () => {
  const blog = {
    title: 'Test Title',
    author: 'the Tester',
    likes: 6
  }

  const testingComponent = render(
    <SimpleBlog blog={blog} />
  )

  expect(testingComponent.container).toHaveTextContent(
    'Test Title the Testerblog has 6 likes'
  )

})

test('clicking the like button twice calls event handler twice', () => {
  const blog = {
    title: 'Test Title',
    author: 'the Tester',
    likes: 6
  }

  const mockHandler = jest.fn()
  const { getByText } = render(
    <SimpleBlog blog = {blog} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})