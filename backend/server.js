import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleWare.js'


dotenv.config()
connectDB()
const app = express()
app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 8000


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} 
mode on port ${PORT}`.yellow.bold))

