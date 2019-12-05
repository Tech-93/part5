import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

describe('Blog tests', () => {
  let component
  let mockHandler
  let blog

  beforeEach(() => {
    mockHandler = jest.fn()

    blog = {
      title: 'Test Title',
      author: 'The Tester',
      url: 'testblog.com',
      likes: 6,
      user: { username: 'fartface', name: 'Simon' }
    }

    const user = {
      username: 'fartface',
      name: 'Simon'
    }

    component = render(
      <Blog blog={blog} onClick={mockHandler} user={user} />
    )


  })

  test('for default displaying only title and author', () => {
    const basicInfo = component.container.querySelector('.basicInfo')
    const fullInfo = component.container.querySelector('.fullInfo')

    expect(basicInfo).toHaveTextContent('Test Title The Tester')
    expect(fullInfo).toHaveStyle('display: none')
  })

  test('for full display to show titel,author,url and likes', () => {
    const basicInfo = component.container.querySelector('.basicInfo')
    const fullInfo = component.container.querySelector('.fullInfo')

    fireEvent.click(basicInfo)
    expect(fullInfo).toHaveTextContent('Test Title The Tester testblog.com 6 likes like added by Simon remove')
    expect(fullInfo).not.toHaveStyle('display: none')


  })

})