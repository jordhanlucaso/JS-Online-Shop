import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import products from './data/Products.ts'

const app = express()
dotenv.config()

const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

// Connect db
mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ndgpl.mongodb.net/`)
  .then(() => console.log('DB Connected'))
  .then((error) => {
    error
  })

// Test Route
app.get('/api/products', (req, res) => {
  res.json(products)
})

app.listen(PORT || 9000, () => {
  console.log(`Server Listening on port ${PORT}`)
})
