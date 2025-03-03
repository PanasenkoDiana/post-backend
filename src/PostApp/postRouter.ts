import { Router } from 'express'
import postsController from './postController'

const router = Router()

router.get('/posts', postsController.getAllPosts)
router.get('/post/:id', postsController.getPostById)

export default router
