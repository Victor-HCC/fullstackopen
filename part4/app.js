import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from './utils/config.js';
import logger from './utils/logger.js';
import mongoose from 'mongoose';
import blogsRouter from './controllers/blogcontrollers.js';
import middleware from './utils/middlewares.js';

const app = express()

logger.info('connecting to', config.MONGODB_URI);

mongoose.connect(config.MONGODB_URI)
 .then(() => {
  logger.info('connected to MongoDB')
 })
 .catch((error) => {
  logger.error('error connecting to MongoDB', error.message)
 })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(middleware.requestLogger)

app.use('/api/blogs', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

export default app;