var _ = require('lodash');

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogList) => {
  return blogList.map(blog => blog.likes).reduce((sum, next) => sum + next, 0)
}

const favoriteBlog = (blogList) => {
  return blogList.reduce((currentMaxBlog, next) => currentMaxBlog.likes > next.likes ? currentMaxBlog : next, {})
}

const mostBlogs = (blogList) => {
  // こんなやり方せずにHashMap使ったほうが断然効率的
  const grouped = _.groupBy(blogList, (blog) => blog.author)
  const blogsStats = _.map(grouped, (array, author) => {
    return {author: author, blogs: array.length}
  })
  return blogsStats.reduce((currentMaxAuthor, next) => currentMaxAuthor.blogs > next.blogs ? currentMaxAuthor : next, {})
}

const mostLikes = (blogList) => {
  // こんなやり方せずにHashMap使ったほうが断然効率的
  const grouped = _.groupBy(blogList, (blog) => blog.author)
  const blogsStats = _.map(grouped, (array, author) => {
    return {
      author: author,
      likes: _.map(array, (blog) => blog.likes).reduce((total, next) => total + next, 0)
    }
  })
  return blogsStats.reduce((currentMaxAuthor, next) => currentMaxAuthor.likes > next.likes ? currentMaxAuthor : next, {})
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
