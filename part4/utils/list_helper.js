const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogList) => {
  return blogList.map(blog => blog.likes).reduce((sum, next) => sum + next, 0)
}

const favoriteBlog = (blogList) => {
  return blogList.reduce((currentMaxBlog, next) => currentMaxBlog.likes > next.likes ? currentMaxBlog : next, {})
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
