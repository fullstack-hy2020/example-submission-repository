const listHelper = require('../utils/list_helper')

describe('favoriteBlog', () => {
  blog1 = {
    title: 'Canonical string reduction',
    author: 'aaaaaa',
    likes: 12
  }
  blog2 = {
    title: 'C',
    author: 'aaaaaa',
    likes: 12
  }
  blog3 = {
    title: 'aaaaaaa',
    author: 'bbbbbbb',
    likes: 22
  }
  blog4 = {
    title: 'bbbbbb',
    author: 'bbbbbbb',
    likes: 10
  }
  blog5 = {
    title: 'cccccc',
    author: 'aaaaaa',
    likes: 0
  }


  test('bigger list', () => {
    const result = listHelper.mostLikes([blog1, blog2, blog3, blog4, blog5])
    expect(result).toEqual({author: "bbbbbbb", likes: 32})
  })
})