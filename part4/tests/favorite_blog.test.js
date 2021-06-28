const listHelper = require('../utils/list_helper')

describe('favoriteBlog', () => {
  blog1 = {
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    likes: 12
  }
  blog2 = {
    title: 'aaaaaaa',
    author: 'bbbbbbb',
    likes: 13
  }
  blog3 = {
    title: 'bbbbbb',
    author: '',
    likes: 0
  }


  test('when list has only one blog', () => {
    const result = listHelper.favoriteBlog([blog1])
    expect(result).toEqual(blog1)
  })

  test('empty list', () => {
    const result = listHelper.favoriteBlog([])
    expect(result).toEqual({})
  })

  test('bigger list', () => {
    const result = listHelper.favoriteBlog([blog1, blog2, blog3])
    expect(result).toEqual(blog2)
  })
})