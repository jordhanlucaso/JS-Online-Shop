import Router from 'express'
import asyncHandler from 'express-async-handler'
import userSchema from './models/User.ts'
import productSchema from './models/Product.ts'
import users from './data/Users.ts'
import products from './data/Products.ts'

const router = Router()

router.post(
  '/users',
  asyncHandler(async (req, res) => {
    await userSchema.deleteMany({})
    const UserSeeder = await userSchema.insertMany(users)
    res.send({ UserSeeder })
  })
)

router.post(
  '/products',
  asyncHandler(async (req, res) => {
    await productSchema.deleteMany({})
    const ProductSeeder = await productSchema.insertMany(products)
    res.send({ ProductSeeder })
  })
)

export default router
