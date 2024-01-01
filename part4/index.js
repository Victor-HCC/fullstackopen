import http from 'http'
import app from './app.js'
import config from './utils/config.js'
import logger from './utils/logger.js'
import mongoose from 'mongoose'

const server = http.createServer(app)

// eslint-disable-next-line no-undef
process.on('SIGINT', () => {
  logger.info('Received SIGINT. Closing MongoDB connection and exiting...')
  mongoose.connection.close(() => {
    logger.info('Mongoose connection closed due to app termination')
    // eslint-disable-next-line no-undef
    process.exit(0)
  })
})

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
