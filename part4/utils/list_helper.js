const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogList) => {
  return blogList.map(blog => blog.likes).reduce((sum, next) => sum + next, 0)
}

module.exports = {
  dummy,
  totalLikes
}
