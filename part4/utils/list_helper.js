const dummy = (blogs) => {
  if(Array.isArray(blogs)) return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => total + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if(blogs.length === 0) return {}

  return blogs.reduce((max, blog) => {
    return blog.likes > max.likes
      ? {
        title: blog.title,
        author: blog.author,
        likes: blog.likes
      }
      : max
  }, blogs[0])
}

// eslint-disable-next-line no-undef
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}