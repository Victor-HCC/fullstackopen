const _ = require('lodash')

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

const mostBlogs = (blogs) => {
  if(_.isEmpty(blogs)) return null

  const blogsByAuthor = _.groupBy(blogs, 'author')

  const authorWithMostBlogs = _.maxBy(Object.keys(blogsByAuthor), author => blogsByAuthor[author].length)

  return {
    author: authorWithMostBlogs,
    blogs: blogsByAuthor[authorWithMostBlogs].length
  }
}

const mostLikes = (blogs) => {
  if(_.isEmpty(blogs)) return null

  const blogsByAuthor = _.groupBy(blogs, 'author')
  const authorWithMostLikes = _.maxBy(Object.keys(blogsByAuthor), author => blogsByAuthor[author].reduce((total, blog) => total + blog.likes, 0))

  const totalLikes = blogsByAuthor[authorWithMostLikes].reduce((total, blog) => total + blog.likes, 0)

  return {
    author: authorWithMostLikes,
    likes: totalLikes
  }
}

// eslint-disable-next-line no-undef
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}