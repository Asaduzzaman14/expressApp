import express, { Application } from 'express'
import cors from 'cors'


// Application Routes
import userRoutes from './app/modules/user/user.route'

const app: Application = express()
app.use(cors()) // using cors

app.use(express.json())
app.use(express.urlencoded({ extended: true }))




/**
 * Step1: Interface
 * Step2: Schema
 * Step3: Model
 * Step4: Database Query
*/



app.use('/api/v1/user', userRoutes)


export default app;