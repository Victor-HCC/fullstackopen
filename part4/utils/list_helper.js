const dummy = (blogs) => {
  if(Array.isArray(blogs)) return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => total + blog.likes, 0)
}

// eslint-disable-next-line no-undef
module.exports = {
  dummy,
  totalLikes
}