import { Router } from 'express'
import categoriesController from './categoryController'

const router = Router()

router.get('/categories', categoriesController.getAllCategories)

export default router
