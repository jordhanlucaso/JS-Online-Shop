import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import databaseSeeder from './databaseSeeder.ts'

const app = express()
dotenv.config()

const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

// Connect db
mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ndgpl.mongodb.net/shop`)
  .then(() => console.log('DB Connected'))
  .then((error) => {
    error
  })

// Database seeder routes
app.use('/api/seed', databaseSeeder)

app.listen(PORT || 9000, () => {
  console.log(`Server Listening on port ${PORT}`)
})
